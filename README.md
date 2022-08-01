# ChunkIT
- [x] A platform that accepts CSV or JSON large files, and break them into smaller bits.

> Our Vision
- [x] Helping clients manage their large file easily.
> Our Client
- [x] Zuri
> Our Target Market
- [x] Large CSV and JSON file users (Developers, companies)


> Our User Personas
- [x] Developers, Data Analyst, Multinationals




## Table of content
- [ChunkIT](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit)
- [Background](https://github.com/zuri-training/Pro_Team_41_Chunk-File#background)
- [Objectives](https://github.com/zuri-training/Pro_Team_41_Chunk-File#objectives)
- [ChunkIt Solutions](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-solutions)
- [Technologies Used](https://github.com/zuri-training/Pro_Team_41_Chunk-File#technologies-used)
- [ChunkIT Key features](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-key-features)
- [Product specialization](https://github.com/zuri-training/Pro_Team_41_Chunk-File#product-specialization)
- [Project Status](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-status)
- [Github Collaboration](https://github.com/zuri-training/Pro_Team_41_Chunk-File#github-collaboration)
- [Links](https://github.com/zuri-training/Pro_Team_41_Chunk-File#links)
- [DOCUMENTATION](https://github.com/zuri-training/Pro_Team_41_Chunk-File#documentation)


## Background
This project, ***ChunkIT***, is a project initiative introduced by the Zuri team. It is useful for anyone sharing large documents. Chunking is simply the process of splitting large files into smaller files called chunks without losing their content or quality.


## Objectives
- To solve problems regarding issues of having large CSV and JSON files
- Allow user to split large CSV and JSON files
- The user should be able to save files and have the possibility of downloading it later in the future
- The user should be able to view statistics of splittings done previously
- The user should be able to sort split CSV and JSON files easily


## ChunkIT Solutions
- Create means of chunking CSV and JSON files seamlessly
- Easily import, save and download your CSV and JSON files anytime
- Chunking as much as 250MB of CSV and JSON files without a fee
- Splitting files into different sizes and numbers


## Technologies Used
- HTML/CSS/Javascript (Frontend)
- MYSQL (Database)
- Django - Framework, Python (Backend)


## ChunkIT Key features 

> Landing page

> FAQ/ContactUs Page

> Registration Page

> Login Page

> About Us

> Documentation Page


> Dashboard:
- Account settings Page
- Library Page

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
> Mobile Phones and Laptops


## Project Status
> Project is in progress


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

## What to do after the file is chunked
>   When chunking is over user can save or download the file. The user can also come back later to continue the process without the risk of losing files  Downloaded files are automatically zipped for easy transfer. Past chunks can be accessed on the user dashboard when needed.

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







