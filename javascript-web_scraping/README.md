<p align="center">
    <img [JavaScript - Web scraping] src="https://hasdata.com/assets/cache_image/components/images/blog/web-scraping.a16f3e1b.webp">
</p>

----------

# <p align="center">JavaScript - Web scraping</p>

----------

## ➤ Menu:

* [➤ Description](#-description)
* [➤ Resources](#-resources)
* [➤ Learning Objectives](#-learning-objectives)
* [➤ Requirements](#-requirements)
* [➤ Setup](#-setup)
* [➤ Tasks](#author-)
* [➤ Author](#author-)

----------

## ➤ Description:

Web scraping is a technique for extracting data from websites, often using JavaScript and libraries such as Cheerio and Puppeteer. JavaScript is a versatile interpreted language, used for front-end and back-end development, as well as for mobile and web applications.

To manipulate JSON data in JavaScript, you can use the built-in JSON object and its parse() and stringify() methods. The request and fetch APIs can be used to send HTTP requests and retrieve data from remote servers. Finally, the Node.js fs module allows you to read and write files on the file system using the readFile() and writeFile() methods.

----------

## ➤ Resources:

Read or watch:

* [Working with JSON data](https://intranet.hbtn.io/rltoken/cyPJuoYvqMiWVB99QjV1xQ)
* [The workflow of accessing the attributes of a simply-created JSON object by Jimmy Tran from Cohort 1 - San Francisco](https://intranet.hbtn.io/rltoken/expcgsbi7f7uNbU70fMGAw)
* [request module](https://intranet.hbtn.io/rltoken/YDUvl1fHJ5XgVj5X-dIvIw)
* [Modern JS](https://intranet.hbtn.io/rltoken/6OCKMSydhE2sW_OLJiL8Bg)

----------

## ➤ General

* Why JavaScript programming is amazing
* How to manipulate JSON data
* How to use request and fetch API
* How to read and write a file using fs module

----------

## ➤ Requirements:

General

* Allowed editors: vi, vim, emacs
* All your files will be interpreted on Ubuntu 14.04 LTS using node (version 10.14.x)
* All your files should end with a new line
* The first line of all your files should be exactly #!/usr/bin/node
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
* All your files must be executable
* The length of your files will be tested using wc
* You are not allowed to use var


## ➤ More Info:

**Install Node 10**
```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

**Install semi-standard**
Documentation

```
$ sudo npm install semistandard --global
```

**Install request module and use it**
Documentation

```
$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
```

Notes: Request module has been deprecated since February 2020 - the team is considering alternative to replace this module - however, it’s a really simple and powerful module for practicing web-scraping in JavaScript (and still used a lot in the industry).


----------

<details>
<summary>Tasks:</summary>

### 0. Readme

Write a script that reads and prints the content of a file.

* The first argument is the file path
* The content of the file must be read in utf-8
* If an error occurred during the reading, print the error object

```
guillaume@ubuntu:~/$ cat cisfun
C is super fun!
guillaume@ubuntu:~/$ ./0-readme.js cisfun
C is super fun!

guillaume@ubuntu:~/$ ./0-readme.js doesntexist
{ Error: ENOENT: no such file or directory, open 'doesntexist'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'doesntexist' }
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 0-readme.js
  
### 1. Write me

Write a script that writes a string to a file.

* The first argument is the file path
* The second argument is the string to write
* The content of the file must be written in utf-8
* If an error occurred during while writing, print the error object

```
guillaume@ubuntu:~/$ ./1-writeme.js my_file.txt "Python is cool"
guillaume@ubuntu:~/$ cat my_file.txt ; echo ""
Python is cool
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 1-writeme.js
  
### 2. Status code

Write a script that display the status code of a GET request.

* The first argument is the URL to request (GET)
* The status code must be printed like this: code: <status code>
* You must use the module request

```
guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/status
code: 200
guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/doesnt_exist
code: 404
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 2-statuscode.js
  
### 3. Star wars movie title

Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

* The first argument is the movie ID
* You must use the Star wars API with the endpoint https://swapi-api.hbtn.io/api/films/:id
* You must use the module request

```
guillaume@ubuntu:~/$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 3-starwars_title.js
  
### 4. Star wars Wedge Antilles

Write a script that prints the number of movies where the character “Wedge Antilles” is present.

* The first argument is the API URL of the Star wars API: https://swapi-api.hbtn.io/api/films/
* Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
* You must use the module request

```
guillaume@ubuntu:~/$ ./4-starwars_count.js https://swapi-api.hbtn.io/api/films
3
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 4-starwars_count.js
  
### 5. Loripsum

Write a script that gets the contents of a webpage and stores it in a file.

* The first argument is the URL to request
* The second argument the file path to store the body response
* The file must be UTF-8 encoded
* You must use the module request

```
guillaume@ubuntu:~/$ ./5-request_store.js http://loripsum.net/api loripsum
guillaume@ubuntu:~/$ cat loripsum
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. Nam memini etiam quae nolo, oblivisci non possum quae volo. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Terram, mihi crede, ea lanx et maria deprimet. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. </p>

<p>Ad eos igitur converte te, quaeso. Pudebit te, inquam, illius tabulae, quam Cleanthes sane commode verbis depingere solebat. Sic enim censent, oportunitatis esse beate vivere. Quo studio Aristophanem putamus aetatem in litteris duxisse? Aeque enim contingit omnibus fidibus, ut incontentae sint. Ut aliquid scire se gaudeant? Qui enim existimabit posse se miserum esse beatus non erit. Putabam equidem satis, inquit, me dixisse. </p>

<p>Duo Reges: constructio interrete. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Illud non continuo, ut aeque incontentae. Illa videamus, quae a te de amicitia dicta sunt. At ille pellit, qui permulcet sensum voluptate. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. </p>

<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nos cum te, M. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Apparet statim, quae sint officia, quae actiones. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Eadem nunc mea adversum te oratio est. Quid, si etiam iucunda memoria est praeteritorum malorum? Hoc enim constituto in philosophia constituta sunt omnia. </p>

guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 5-request_store.js
  
### 6. How many completed?

Write a script that computes the number of tasks completed by user id.

* The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
* Only print users with completed task
* You must use the module request

```
guillaume@ubuntu:~/$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ '1': 11,
  '2': 8,
  '3': 7,
  '4': 6,
  '5': 12,
  '6': 6,
  '7': 9,
  '8': 11,
  '9': 8,
  '10': 12 }
guillaume@ubuntu:~/$
```

Repo:

* GitHub repository: holbertonschool-javascript-coding
* Directory: javascript-web_scraping
* File: 6-completed_tasks.js

</details>

----------

## Author :

- Khadija AASSI| [Github](https://github.com/khadaassi)