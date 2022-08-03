from tkinter.filedialog import askopenfilename
import pathlib


uploaded_file = askopenfilename()
read_buffer_size = 1024
chunk_size = 1024 * 10000


# this method chunk's the file
def _chunk_file(file, extension):
    current_chunk_size = 0
    current_chunk = 1

    # we want to know when its done reading the file
    done_reading = False
    while not done_reading:
        # current_chunk: this will take the original file name, extension: will take original file extension
        # ab is to read the file in append binary
        with open(f'{current_chunk}{extension}', 'ab') as chunk:
            while True:
                buffering = file.read(read_buffer_size)
                if not buffering:
                    done_reading = True
                    break

                chunk.write(buffering)
                current_chunk_size += len(buffering)
                # This is to check that the file is higher than chunk size we set
                if current_chunk_size + read_buffer_size > chunk_size:
                    # if its higher, an extra file is added
                    current_chunk += 1
                    current_chunk_size = 0
                    break


def _split():

    # this will read in binary mode
    with open(uploaded_file, 'rb') as file:

        _chunk_file(file, pathlib.Path(uploaded_file).suffix)


_split()
