[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href=https://github.com/blavian/MySafePlace/blob/main/readme.md">
  </a>


  <p align="center">
   My Safe Place
    <br />
    <a href=https://github.com/blavian/MySafePlace/wiki><strong>Explore the wiki »</strong></a>
    <br />
    <br />



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

My safe place was created to help users who are struggling with self-esteem. Users can
create positive self affirmations to help them see how great they really are.  

### Built With
 
* React
* Redux
* Python
* Flask
* JavaScript
* Styled Components

<!-- GETTING STARTED -->
## Getting Started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/blavian/MySafePlace.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


Project Link: [https://github.com/blavian/MySafePlace](https://github.com/blavian/MySafePlace)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/blavian/MySafePlace.svg?style=for-the-badge
[contributors-url]: https://github.com/blavian/MySafePlace/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/blavian/MySafePlace.svg?style=for-the-badge
[forks-url]: https://github.com/blavian/MySafePlace/network/members
[stars-shield]: https://img.shields.io/github/stars/blavian/MySafePlace.svg?style=for-the-badge
[stars-url]: https://github.com/blavian/MySafePlace/stargazers
[issues-shield]: https://img.shields.io/github/issues/blavian/MySafePlace.svg?style=for-the-badge
[issues-url]: https://github.com/blavian/MySafePlace/issues
[license-shield]: https://img.shields.io/github/license/blavian/MySafePlace.svg?style=for-the-badge
[license-url]: https://github.com/blavian/MySafePlace/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/benjamin-lavian/
