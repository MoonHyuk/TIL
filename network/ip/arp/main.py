from arp import *

network = Network()
node1 = Node(network, "192.168.0.1", "00:00:00:00:00:01")
node2 = Node(network, "192.168.0.2", "00:00:00:00:00:02")
node3 = Node(network, "192.168.0.3", "00:00:00:00:00:03")
node4 = Node(network, "192.168.0.4", "00:00:00:00:00:04")


print(node1.request("192.168.0.3"))
print(node1.request("192.168.0.2"))

print(node1.arp_cache)
print(node2.arp_cache)
print(node3.arp_cache)
print(node4.arp_cache)

node5 = Node(network, "192.168.0.1", "00:00:00:00:00:05")
