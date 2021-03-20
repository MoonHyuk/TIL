from collections import defaultdict

EMPTY_IP_ADDRESS = '0.0.0.0'
EMPTY_MAC_ADDRESS = '00:00:00:00:00:00'
BROADCAST_MAC_ADDRESS = 'ff:ff:ff:ff:ff:ff'
ARP_REQUEST = 1
ARP_REPLY = 2


class ARPPacket:
    def __init__(self, opcode: int, sender_ip: str, sender_mac: str, target_ip: str, target_mac: str):
        self.opcode = opcode
        self.sender_ip = sender_ip
        self.sender_mac = sender_mac
        self.target_ip = target_ip
        self.target_mac = target_mac


class Frame:
    def __init__(self, source: str, destination: str, arp_packet: ARPPacket):
        self.source = source
        self.destination = destination
        self.arp_packet = arp_packet


class Link:
    def __init__(self):
        self.nodes = []

    def send(self, frame: Frame):
        if frame.destination == BROADCAST_MAC_ADDRESS:
            dest_nodes = [node for node in self.nodes if node.mac != frame.source]

            for dest_node in dest_nodes:
                dest_node.receive(frame)

        else:
            dest_node = [node for node in self.nodes if node.mac == frame.destination][0]

            dest_node.receive(frame)


class Node:
    def __init__(self, link: Link, ip: str, mac: str):
        self._ip = ip
        self.mac = mac
        self.arp_cache = defaultdict(str)
        self.link = link
        self.link.nodes.append(self)

        if not self.__acd_probe():
            print(f"The IP address {self._ip} already exists")
            return

        self.__acd_announcement()

    def __send(self, arp_packet: ARPPacket):
        destination = BROADCAST_MAC_ADDRESS if arp_packet.opcode == ARP_REQUEST \
            else arp_packet.target_mac

        frame = Frame(self.mac, destination, arp_packet)

        self.link.send(frame)

    def __acd_probe(self):
        arp_packet = ARPPacket(ARP_REQUEST, EMPTY_IP_ADDRESS, self.mac, self._ip, EMPTY_MAC_ADDRESS)
        self.__send(arp_packet)

        if self._ip in self.arp_cache:
            return False

        return True

    def __acd_announcement(self):
        arp_packet = ARPPacket(ARP_REQUEST, self._ip, self.mac, self._ip, EMPTY_MAC_ADDRESS)
        self.__send(arp_packet)

    def request(self, target_ip):
        if target_ip in self.arp_cache:
            print("find in cache")
            return self.arp_cache[target_ip]

        arp_packet = ARPPacket(ARP_REQUEST, self._ip, self.mac, target_ip, EMPTY_MAC_ADDRESS)
        self.__send(arp_packet)

        return self.arp_cache[target_ip]

    def receive(self, frame: Frame):
        arp_packet = frame.arp_packet

        if arp_packet.opcode == ARP_REQUEST:
            if arp_packet.target_ip == self._ip:
                self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac

                reply_packet = ARPPacket(ARP_REPLY, self._ip, self.mac, arp_packet.sender_ip, arp_packet.sender_mac)
                self.__send(reply_packet)

            elif arp_packet.sender_ip in self.arp_cache:
                self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac

        elif arp_packet.opcode == ARP_REPLY:
            self.arp_cache[arp_packet.sender_ip] = arp_packet.sender_mac
