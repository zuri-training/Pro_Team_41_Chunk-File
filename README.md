# Deployment Instructions
> THE DEPLOYMENT BRANCH IS - [backend/main](https://github.com/zuri-training/Pro_Team_41_Chunk-File/tree/backend/main)

1.  clone the branch backend/main with the command below
```
git clone -b backend/main https://github.com/zuri-training/Pro_Team_41_Chunk-File.git
```
2. install the requirement for the project with the command below

```
pip install -r requirements.txt
```
3. Make migrations for the project folder- **chunk_41**
```
python manage.py makemigrations chunkit
python manage.py migrate chunkit
```

4. The achitecture is Monolith (Django Templating)
> 
5. static and media files configured
>
6. Please when specifying the static path on the server, remember to specfify the media path too.
>
7. The project folder name is chunk_41. it is where setting.py, wsgi.py can be found.
> 
8. The app folder name is chunkit
>
9. the static folder name is static
>
10. the media folder name is media

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


## Table of Contents
- [Deployment Instructions](https://github.com/zuri-training/Pro_Team_41_Chunk-File#deployment-instructions)
- [ChunkIT](https://github.com/zuri-training/Pro_Team_41_Chunk-File/blob/main/README.md#background)
- [Project Description](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-description)
   - [ChunkIT Objectives](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-objectives)
   - [ChunkIT Solutions](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-solutions)
   - [ChunkIT Key features](https://github.com/zuri-training/Pro_Team_41_Chunk-File#chunkit-key-features)
   - [User Flow](https://github.com/zuri-training/Pro_Team_41_Chunk-File#user-flow)
   - [What to expect in future versions](https://github.com/zuri-training/Pro_Team_41_Chunk-File#what-to-expect-in-future-versions)
   - [Technologies Used](https://github.com/zuri-training/Pro_Team_41_Chunk-File#technologies-used)
   - [Challenges we faced](https://github.com/zuri-training/Pro_Team_41_Chunk-File#challenges-we-faced) 
- [Product Specialization](https://github.com/zuri-training/Pro_Team_41_Chunk-File#product-specialization)
- [Project Status](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-status)
- [Github Collaboration](https://github.com/zuri-training/Pro_Team_41_Chunk-File#github-collaboration)
- [Project Links](https://github.com/zuri-training/Pro_Team_41_Chunk-File#project-links)
- [Credits](https://github.com/zuri-training/Pro_Team_41_Chunk-File#credits)
- [DOCUMENTATION](https://github.com/zuri-training/Pro_Team_41_Chunk-File#documentation)


## Project Description
This project, **ChunkIT**, is a project initiative introduced by the Zuri team. ChunkIT is a platform that accepts CSV or JSON large files and chunks them into smaller bits. It also allows users to save or download their files in zipped format anytime. **Chunking** is simply the process of splitting large files into smaller files called **chunks** without losing their content or quality.


### ChunkIT Objectives
- Solve problems regarding issues of having large CSV and JSON files
- Allow user to split large CSV and JSON files
- Allow user to save files and have the possibility of downloading in the future


### ChunkIT Solutions
- Create means of chunking CSV and JSON files seamlessly
- Easily import, save and download your CSV and JSON files anytime
- Chunking as much as 250MB of CSV and JSON files without a fee
- Splitting files into different sizes and numbers


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

### User Flow
> #### Unauthenticated User:
1. The user visits the Landing page and can view the platform's features.


> ![Landing page](https://user-images.githubusercontent.com/71017261/184410896-5838e02d-8d03-4355-a016-e37e3ae19a8c.gif)


2. The user can access the platform's documentation and other pages on the header section.


> ![Plaform page](https://user-images.githubusercontent.com/71017261/184406425-fe508c32-1467-4998-ba9a-93de80fd0060.gif)


3. The user can create an account by navigating to the sign up page. When they successfully create an account, they are authorised to access the dashboard where they can chunk and save their files.


> ![Register](https://user-images.githubusercontent.com/71017261/184406953-f7379b15-b9d6-496a-a98e-f209df328fc1.gif)


> #### Authenticated User:
1. The user now has full access to all our services and can chunk any CSV or JSON file he wants

> ![Chunking](https://user-images.githubusercontent.com/71017261/184409368-727fc67e-ca28-40b5-bd75-ec7f7e377053.gif)

2. The user has a dashboard where he can upload, chunk, save or download files at any time.

> ![Downloading](https://user-images.githubusercontent.com/71017261/184409454-9451a28f-11dd-45aa-8a38-dfd4bcb86849.gif)

3. The user also has a account settings page that they can access anytime they log in.

> ![Account](https://user-images.githubusercontent.com/71017261/184409502-5c5eb1c5-ba9d-4174-b43b-74b92cfded05.gif)

### What to expect in future versions 

- Allow user to view statistics of splittings done previously
- Allow user to sort split CSV and JSON files easily
- Merge CSV and JSON
- Allow user to chunk more file formats 

### Technologies Used

##### HTML, CSS 
HTML & CSS add structure and style to the webpages.

#### Bootstrap
The Bootstrap framework was used to quickly design the front end of the platform. 

#### Javascript (Vanilla)
Vanilla JS was used to create an rich interfaces, add speed to the client side and add functionality to the platform's authentication.

#### Python (Django)
Django was used for the rapid development of a secure and maintainable platform at the backend.

> ###### MySQL 

MySQL was used to provide comprehensive support for the applications developed in Django and to store user data.

### Challenges we faced
> #### Cracking the chunking functionality
   We planned to implement 3 methods of chunking:
   
   1. Chunking by size (which was the primary method to implement)
      - The user chooses the size of each chunk to be generated from the original file, then the original file is divided according to the specified size.
      - e.g. A user uploads a 100 MB file and chooses a chunk size of 5 MB. 20 files of roughly 5 MB each would be generated from the 100 MB file.
   2. Chunking by number of rows 
      - The user chooses the number of rows each file chunk should have. 
      - e.g. With a file of 20 rows, and the user chooses 10 rows per chunk, approximately 2 files will be generated.
   3. Chunking by number of files/chunks
      - The user selects the number of files they would like to be generated from the original file.
      - e.g. From an 80 MB file, a user requires 5 files. Approximately 5 files of 16 MB will be generated from the original file.

Chunking by size is possible; however, we discovered that the end product is not usable at times. For example, when a user uploads a JSON file of 20 MB and they require chunks of 2MB, generating files of exactly 2MB each meant that the file may not meet the JSON file standards.


> #### Solution (Cracking the chunking functionality)
We decided to attempt chunking by the number of files, which was easier to implement for the team. 

We used the Pandas library to implement the algorithm to chunk the files. The following is a snippet of our code:

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
 ###### N.B. Although the user may select the number of chunks/files they require, they may find that the files generated are one chunk/file more than requested.
 This was inevitable because as the algorithim is chunking the files, it prioritises the usability of the file. This means that if the required number of chunks/files are generated but they are not usable, the algorithm will try to increase the number of chunks to meet the CSV or JSON file standards, such that the file is usable.
 

> #### Deploying to the server

> #### Implementing the platform according to UI/UX design specifications
Our team consists of Product Designers, Frontend Developers and Backend Developers. The Product Designers carried out the necessary research to inform the UI designs, and shared the hi-fidelity screens and relevant resources with the Frontend developers for platform implementation. The Frontend developers then communicated with the backend developers about any chances made to the UI designs that would influence the backend features. 

Although the Frontend developers managed to implement the UI design changes as accurately as possible, the user flow between each screen was not developed according to the Product Design teams expectations in some instances. The Frontend developers interpreted the flow different from the Designers, whilst the Backend developers also had their own interpretation.

> #### Solution (Implementing the platform according to UI/UX design specifications)
Towards the end of the project, we started having some designers joining developer meetings to find out how developers interpret the UI designs. This uncovered the areas where there were misunderstandings, and we were able to rectify most of the inconsistencies that were on our platform. Communication between all subgroups of the team was important to ensure the end product is seamless.

## Product Specialization
> Mobile Phones and Laptops

> ![Responsive](https://user-images.githubusercontent.com/71017261/184665794-af7eab0e-a489-455a-9429-e2688130ac43.gif)


## Project Status
> First Phase completed, Next Phase yet to start


## Github Collaboration
1. Fork this repository and create a project folder on your local machine

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


## Project Links
> #### Our testable link
- https://chunkt.pythonanywhere.com/

> #### Our frontend implementation link
- https://zuri-training.github.io/Pro_Team_41_Chunk-File/



## Credits 
#### Team members

| Name                             | Github Username                                              | Role                                       |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Peter Felix                      | [@thejourneybeginsng](https://github.com/thejourneybeginsng) | Product Designer (Team Lead)               |
| Efosa Ero                        | [@Efoxa](https://github.com/Efoxa)                           | Full Stack Developer (Assistant Team Lead) |
| Nicole Moyo                      | [@beverly-m](https://github.com/beverly-m)                   | Product Designer (Assistant Team Lead)     |
| Ohayi James Chukwuka             | [@Sanctogiacomo](https://github.com/Sanctogiacomo)           | Product Designer                           |
| Daniel Ukoha                     | [@Superfly101](https://github.com/Superfly101)               | Frontend Developer                         |
| Louis Binah                      | [@BINAH25](https://github.com/BINAH25)                       | Full Stack Developer                       |
| John Ojibo                       | [@jkull247](https://github.com/jkull247)                     | Frontend Developer                         |
| Emmanuel Osaite                  | [@Vixxena](https://github.com/Vixxena)                       | Product Designer                           |
| Chukwuebuka Joshua Ezeokechukwu  | [@Ebuka500](https://github.com/Ebuka500)                     | Product Designer                           |
| Marthar Nderitu                  | [@MNderi](https://github.com/MNderi)                         | Frontend Developer                         |
| Metu Jane                        | [@MetuJane](https://github.com/MetuJane)                     | Product Designer                           |
| Esther Oyebode                   | [@EstherOyebode](https://github.com/EstherOyebode)           | Product Designer                           |
| Azeez Olayinka Bankole           | [@Olabanky](https://github.com/Olabanky)                     | Frontend Developer                         |
| Adedamola Alausa                 | [@Theadedamola](https://github.com/Theadedamola)             | Product Designer                           |
| Francis Udeh                     | [@UgoKing](https://github.com/UgoKing)                       | Product Designer                           |
| Augusta Okwor                    | [@AugustaOkwor1](https://github.com/AugustaOkwor1)           | Product Designer                           |
| Oyindamola Aina                  | [@Dammina001](https://github.com/Dammina001)                 | Frontend Developer                         |
| Oyetoke Anu                      | [@Oyetokeanu](https://github.com/Oyetokeanu)                 | Product Designer                           |
| Queen Iheanacho                  | [@Preshtyrace](https://github.com/Preshtyrace)               | Product Designer                           |
| Chukwudebere Emmanuel Onyinyechi | [@Daberetech](https://github.com/Daberetech)                 | Product Designer                           |
| Adewole Abdulazeez               | [@TechFlow247](https://github.com/TechFlow247)               | Product Designer                           |
| Omonigho Seth                    | [@nigho-seth](https://github.com/nigho-seth)                 | Product Designer                           |
| Judah Ndukwu                     | [@Cleverley1](https://github.com/Cleverley1)                 | Product Designer                           |
| Joseph Igbekoyi                  | [@Jaay06](https://github.com/Jaay06)                         | Frontend Developer                         |

#### Resources
These are platforms that helped us build the project:
- https://greensock.com/forums/forum/11-gsap/
- https://stackoverflow.com/
- https://www.w3schools.com/
- https://codepen.io/

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
