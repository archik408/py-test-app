from threading import Thread
from time import sleep

def tf(arg):
    for i in range(arg):
        print "running"
        sleep(1)


if __name__ == "__main__":
    thread = Thread(target = tf, args = (5, ))
    thread.start()
    # parallel
    for i in range(6):
        print "continuing"
        sleep(1)
    thread.join()
    print "thread finished...exiting"