# Hackaton
<p align="center">
  <img src="https://github.com/rorro6787/rorro6787/blob/main/Images/Oracle-Cloud-Emblem.png" width="400"/>
</p>

This repository contains the code and resources developed by the PolishCow team during the Málaga Hackathon held on October 17, 2024. The project showcases innovative solutions using cutting-edge techniques to tackle the hackathon challenge. All relevant files and scripts are included to demonstrate the team's approach and results.

## Table of Contents

- [Features](#features)
- [Information](#information)
- [Contributers](#contributors)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features
This project focuses on water sustainability, using modern cloud infrastructure and AI modeling to provide historical and predictive data about water dams in Spain. It is a full-stack project leveraging Oracle Cloud Infrastructure and various technologies to build an interactive, secure platform for users. Below are the key features:

### Backend:
- **Oracle Autonomous Database**: A highly scalable, cloud-hosted database storing detailed information about water dams across Spain, along with 20 years of historical data.
- **Python Flask Server**: 
  - Acts as the backend for handling client requests.
  - Hosts an **ARIMA model** for time-series prediction, estimating the water levels of selected dams for the next 5 years.
  - Provides APIs that allow the frontend to fetch data and predictions.

### Frontend:
- **React & Next.js**: 
  - Responsive and dynamic web interface.
  - Users can input coordinates or enable geolocation to locate dams within a certain radius.
  - Displays a map with markers showing nearby water dams.
  - Shows historical graphs of water levels for selected dams from the past 20 years.

### AI & Prediction:
- **ARIMA Model**: Implemented in Python to predict water levels in the dams for the next 5 years based on historical data.

### Security Features:
- **Cybersecurity**:
  - Integration of **reCAPTCHA** to prevent bots.
  - Use of **Challenge-Response** mechanisms to secure endpoints.
  - **TLS protocol** for secure communication.
  - **Cloudflare** for protection against **DDoS** attacks and web scraping.

### Hosting:
- **Vercel**: Frontend hosting for high-performance web applications. URL pf the Vercel Hosted App: https://hackaton-knkj.vercel.app/embalses
- **Cloudflare**: Acts as a security layer to prevent DDoS attacks and optimize performance.

## Information
<p align="center">
  <img src="https://github.com/rorro6787/rorro6787/blob/main/Images/Captura%20desde%202024-10-16%2023-24-08.png"/>
</p>

## Contributors

- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/rorro6787) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emilio-rodrigo-carreira-villalta-2a62aa250/) **Emilio Rodrigo Carreira Villalta**
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://www.linkedin.com/in/ivan-iroslavov-petkov-80b960236/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ivan-iroslavov-petkov-80b960236/) **Iván Iroslavov Petkov**
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://www.linkedin.com/in/alfarojdd/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alfarojdd/) **Juan de Dios Alfaro López**
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://www.linkedin.com/in/adrian-pradas-gallardo-376799323/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)]([https://www.linkedin.com/in/alfarojdd/](https://www.linkedin.com/in/adrian-pradas-gallardo-376799323/)) **Adrián Pradas Gallardo**
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://www.linkedin.com/in/rocio-guzman-112a87213/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rocio-guzman-112a87213/) **Rocío Guzmán**

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## Acknowledgements

Inspired by several youtube tutorials and the Oracle Cloud Infrastracture (OCI).
