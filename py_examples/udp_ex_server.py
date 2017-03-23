import socket

server_address = ('localhost', 10000)
data = "msg"

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(server_address)

while True:
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    sock.sendto(data, addr)
    print "received message from client:", data