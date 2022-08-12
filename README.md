<p><img src = "/Front-end\assets\icons\logo.svg"></p>

## Background
- [x] A platform that accepts CSV or JSON large files and chunks them into smaller bits.

> Our Vision
- [x] Helping clients manage their large files easily.

> Our Client
- [x] Zuri

> Our Target Market
- [x] Large CSV and JSON file users (Developers, companies)

> Our User Personas
- [x] Developers, Data Analyst, Multinationals




## Table of content
- [ChunkIT](https://github.com/zuri-training/Pro_Team_41_Chunk-File/blob/main/README.md#background)
- [Project Description](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-description)
- [Objectives](https://github.com/zuri-training/Pro_Team_41_Chunk-File#objectives)
- [ChunkIt Solutions](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-solutions)
- [Technologies Used](https://github.com/zuri-training/Pro_Team_41_Chunk-File#technologies-used)
- [ChunkIT Key features](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-key-features)
- [Product specialization](https://github.com/zuri-training/Pro_Team_41_Chunk-File#product-specialization)
- [Project Status](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-status)
- [Github Collaboration](https://github.com/zuri-training/Pro_Team_41_Chunk-File#github-collaboration)
- [Links](https://github.com/zuri-training/Pro_Team_41_Chunk-File#links)
- [DOCUMENTATION](https://github.com/zuri-training/Pro_Team_41_Chunk-File#documentation)


## Project Description
This project, **ChunkIT**, is a project initiative introduced by the Zuri team. ChunkIT is a platform that accepts CSV or JSON large files and chunks them into smaller bits. It also allows users to save or download their files in zipped format anytime. **Chunking** is simply the process of splitting large files into smaller files called **chunks** without losing their content or quality.


### Objectives
- Solve problems regarding issues of having large CSV and JSON files
- Allow user to split large CSV and JSON files
- Allow user to save files and have the possibility of downloading in the future


### ChunkIT Solutions
- Create means of chunking CSV and JSON files seamlessly
- Easily import, save and download your CSV and JSON files anytime
- Chunking as much as 250MB of CSV and JSON files without a fee
- Splitting files into different sizes and numbers


### Technologies Used

##### HTML, CSS 
HTML & CSS add structure and style to the webpages.

#### Bootstrap
The Bootstrap framework was used to quickly design the front end of the platform. 

#### Javascript (Vanilla)
Vanilla JS was used to create an rich interfaces, add speed to the client side and add functionality to the platform's authentication.

#### Python (Django)
Django was used for the rapid development of a secure and maintainable platform at the backend.

> MySQL 

MySQL was used to provide comprehensive support for the applications developed in Django and to store user data.

### Challenges we faced
> Cracking the splitting functionality
   <p>Splitting by size is possible, but the end product may not be usable. This issue was resolved by using the <strong>Numbers of chunks</strong> feature and Pandas Library.</p> 

   ```
   import pandas as pd
   
   if url.split(".")[-1] == 'csv':
       df = pd.read_csv(url)
       rows_per_file = df.shape[0] // file_count
       folder_name = str(settings.BASE_DIR) + "\\temp\\" + str(int(time.time()*1000))
       os.makedirs(folder_name)
       for row_start in range(0, df.shape[0], rows_per_file):
           new_file  = df[row_start:row_start+rows_per_file]
           new_file.to_csv(f"{folder_name}/chunk_{row_start}.csv")
   ```

> Deploying to the server

> Implementing the frontend of the platform according to specification

### ChunkIT Key features 

####  Landing Page, FAQ/ContactUs Page, About Us page & Documentation page 

Accessible to all users, authenticated and unauthenticated

####  Sign In and Sign Up page 

To authenticate users to access the chunking platform 

####  Dashboard

Where the user can chunk their files and optionally save them on the platform for future downloading

##### Dashboard - Library Page

User can upload a file and chunk it according to their preference. The user's saved files are also listed in the library page.

##### Dashboard - Account settings Page

User can view their account details and change their authentication details 

### What to expect in future versions 

- Allow user to view statistics of splittings done previously
- Allow user to sort split CSV and JSON files easily
- Merge CSV and JSON
- Allow user to chunk more file formats 

### User Flow
> Unauthenticated User:
- User starts flow by entering the Landing page from the link and can check through who we are and the services we can offer.
- Users can access the platform's documentation and other resources on the header section.
- The moment an unauthenticated user signs up, they are authorised to access the plaform's chunking features and their journey continues.
> Authenticated User:
- The user now has full access to all our services and can chunk any CSV or JSON file he wants
- The user has a dashboard where he can upload, chunk, save or download files at any time.
- The user also has a setting, profile, and chunk history page that he can access anytime he logs in.


## Product Specialization
> Mobile Phones, Tablets and Laptops


## Project Status
> first Phase completed
> next Phase yet to start


## Github Collaboration
1. Fork this repository and create a project folde on your local manchine

2. Navigate to the terminal (pointing to your project folder/directory), Clone and then open it up on your prefered code editor

```
git clone https://github.com/<your github username>/Pro_Team_41_Chunk-File.git
```
3. Open terminal and set upsream branch:
```
git remote add upstream https://github.com/zuri-training/Pro_Team_41_Chunk-File.git
```
4. Pull upstream to get the latest update from the original repo (https://github.com/zuri-training/Pro_Team_41_Chunk-File.git)
```
git pull upstream main
```
5. Create a new branch for the task your are doing eg:
```
git checkout -b support-module
```
6. After making changes, do
```
git add .
```
7. Commit your changes with a descriptive commit message
```
git commit -m "commit message"
```
8. To make sure there are no conflicts:
```
git pull upstream main
```
9. Push changes to your new branch:
```
git push origin your-current-branch-name
```
10. Create a pull request to the main branch


## Links
> Our testable link
- https://zuri-training.github.io/Pro_Team_41_Chunk-File/
 

# DOCUMENTATION
## Understanding the process of chunking files

>   Chunking is a process of splitting large files into smaller files called chunks. In some applications, such as remote data compression, data synchronisation, and data duplication, chunking is important because it determines the duplicate detection performance of the system. Chunk File is a small and handy application designed to help you split large files into pieces of a set size, so you can easily transfer them without losing any files. The use of web applications with the function of splitting large CSV or JSON files into small files is for easy opening and archiving

## What is ChunkIT?
>   ChunkIt is a platform that accepts CSV or JSON large files and breaks them into smaller bits. For this application to work, the file being uploaded must be in the right format and within the acceptable size range. Successfully chunked files can either be downloaded soon after the chunking process or saved on the platform for future downloads.

## How does it work? 
>   ChunkIt is a web-based platform that splits large or heavy CSV and JSON files. When a user uploads a large file of up to 250MB to our platform, our Python Panda modules begin authenticating the files to determine if they are CSV or JSON. If the files are none of these determined inputs or bigger than the size, our platform would not accept them, but if the data input is true, it accepts the files after determining the state, and the process of splitting commences through the help of the panda modules. The data is stacked in smaller files querying the number of parts or the size the user needs to split it. This is done through the use of logic. When the process of splitting is completed, the result is zipped using shutil modules, ready for the user to download.

## Getting Started 

>   For a user to get started with using the chunking feature of the platform, they need to create an account by registering with their email address to become an authenticated user. This means that an unauthenticated user can not use the chunking feature. However, the unauthenticated user can interact with the platform’s documentation by accessing the resources tab in the header section.  They can also go through the platform’s landing page and FAQ section to learn more about its features.

## Uploading and chunking a file on ChunkIT

>   Upon creating an account, the user is redirected to the user dashboard where they can start uploading files they want to process. 
  They choose the option to upload a new file, and a screen appears that allows them to upload a file. 
  The platform currently supports chunking JSON and CSV files; however, more file formats will be supported in future versions. 
  The user then uploads their file by either dragging and dropping it on the screen, or browsing through their device’s file system. 
  The platform can only accept files up to 250 MB in size and are also of the correct format, CSV or JSON. 
 Once the file uploaded by the user satisfies the requirements, the user can choose the size of the chunk files they require. 
 The size of the chunk should not be above the original file size. If it is, the file will not be chunked.   If the size of the chunk is within the acceptable range, the user is directed to a screen where they can download a zipped file containing the chunked file. The user can also choose to download the files later, and their files are saved on the dashboard.
 <p align="center"><img src="/Front-end/assets/team images/chunk file modal.png" height="450"></p>

## What to do after the file is chunked
>   When chunking is over user can save or download the file. The user can also come back later to continue the process without the risk of losing files.  Downloaded files are automatically zipped for easy transfer. Past chunks can be accessed on the user dashboard when needed.
 <p align="center"><img src="/Front-end/assets/team images/zip- svg.png" height="450"></p>

## List of available features  

- Analyse files
- Split JSON
- Split CSV
- Split by rows
- Split by file size
- Split by number of chunks
- Save chunked CSV files
- Save chunked JSON files
- Download chunked CSV files
- Download chunked JSON files
- Delete CSV chunks
- Delete JSON chunks
- View chunk history
