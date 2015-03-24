# Asidua Hackathon - Deploying .Net vNext Applications to Azure using Docker. 

## Setup

You will need the following: 

1) A Linux client with Docker installed. 

2) A Docker Host on Azure 

Follow the guide posted [here](https://msopentech.com/blog/2014/09/11/docker_host_in_azure/)

Ensure the correct endpoints are setup on Azure. 8080 Private -> 80 Public. 

## Process: 

Build the Docker container:

```
$ git clone https://github.com/mteeney01/asidua-hack.git
```

From the repository root: 

1. Run `docker --tls build -t myapp .` 
2. Once the container has been built, run `docker --tls run -d -t -p 8080:5000 myapp`
3. Navigate to the URL of your Docker Host. 
