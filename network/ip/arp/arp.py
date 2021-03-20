from collections import defaultdict


class Network:
    def __init__(self):
        self.nodes = []


class Node:

    def __init__(self, network, ip: str, mac: str):
        self._ip = ip
        self.mac = mac
        self.arp_cache = defaultdict(str)
        self.network = network
        self.network.nodes.append(self)

        if not self.__acd_probe():
            raise ValueError(f"The IP address {self._ip} already exists")

        self.__acd_announcement()

    def __acd_probe(self):
        request_packet = ARPPacket(1, "0.0.0.0", self.mac, self._ip, "00:00:00:00:00:00")

        self.__broadcast(request_packet)

        if self._ip in self.arp_cache:
            return False

        return True

    def __acd_announcement(self):
        request_packet = ARPPacket(1, self._ip, self.mac, self._ip, "00:00:00:00:00:00")

        self.__broadcast(request_packet)

    def __receive(self, arp_packet):
        if arp_packet.opcode == 1:
            if arp_packet.target_ip == self._ip:
                self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac

                reply_packet = ARPPacket(2, self._ip, self.mac, arp_packet.sender_ip, arp_packet.sender_mac)
                self.__unicast(arp_packet.sender_mac, reply_packet)

            elif arp_packet.sender_ip in self.arp_cache:
                self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac

        elif arp_packet.opcode == 2:
            self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac

    def __unicast(self, target_mac, packet):
        target = [node for node in self.network.nodes if node.mac == target_mac][0]
        target.__receive(packet)

    def __broadcast(self, packet):
        same_network_nodes = [node for node in self.network.nodes if node is not self]

        for node in same_network_nodes:
            node.__receive(packet)

    def request(self, target_ip):
        if target_ip in self.arp_cache:
            print("find in cache")
            return self.arp_cache[target_ip]

        request_packet = ARPPacket(1, self._ip, self.mac, target_ip, "00:00:00:00:00:00")

        self.__broadcast(request_packet)

        return self.arp_cache[target_ip]


class ARPPacket:
    def __init__(self, opcode, sender_ip, sender_mac, target_ip, target_mac):
        self.opcode = opcode
        self.sender_ip = sender_ip
        self.sender_mac = sender_mac
        self.target_ip = target_ip
        self.target_mac = target_mac
