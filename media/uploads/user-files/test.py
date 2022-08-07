import pandas as pd
import json
import urllib.request

data  = pd.read_json('sample4.json')
print(data.shape[0])

if url.split(".")[-1] == 'csv':
            df = pd.read_csv(url)
            rows_per_file = df.shape[0] // file_count
            folder_name = str(settings.BASE_DIR) + "\\temp\\" + str(int(time.time()*1000))
            os.makedirs(folder_name)
            for row_start in range(0, df.shape[0], rows_per_file):
                new_file  = df[row_start:row_start+rows_per_file]
                new_file.to_csv(f"{folder_name}/chunk_{row_start}.csv")

            outputfile = str(settings.MEDIA_ROOT) + f"\\processed-files\\folder_name"
            shutil.make_archive(outputfile, 'zip', folder_name)
            file.processed_file = f"/processed-files/folder_name.zip"
            file.save()
        return redirect("download", file.id)
