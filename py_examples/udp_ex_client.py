import socket
import time

HOST, PORT = "localhost", 10000
data = "msg"

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    sock.sendto(data, (HOST, PORT))
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    print "received message from server:", data
    time.sleep(5)