import os

# Write
f = open('myfile.dat', 'w+')
f.write('Hi Py!\n Boom!')
f.close()

# Read
f = open('myfile.dat', 'r')
print f.read()
f.close()

# Delete
os.unlink('myfile.dat')