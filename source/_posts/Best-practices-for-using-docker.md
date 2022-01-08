---
title: Best practices for using docker
date: 2022-01-08 16:20:47
tags: Docker
---

## Best practices for using docker

1. Use official Docker images as base image.
   - cleaner dockerfile
   - verified and already built with best practices
   - official docker image
1. Use specific image versions
   - you might get different docker image versions
   - might break stuff
   - latest tag is unpredictable
1. Use small-sized official images(`alpline` version)
   - full blown OS distro with lots of tools installed inside uses larger image size
     and more security vulnerabilities
   - leaner OS distro only bundle necessary utilities
1. Optimize caching image layers
   - order `Dockerfile` commands from least to most frequently changing,
     this way optimize how fast the image gets build
1. Use `.dockerignore` file to explicitly exclude files and folders in order to:
   - reduce image size
   - prevent unintended secrets exposure
1. Make use of "Multi-Stagte Builds"

   - less dependencies and much smaller in size some contents in the project that you need for building the image during the build process but don't need them in the final image that will increase the image size and the attack surface some.
     a specific example for this is `package.json`, `palm.xml` or any other dependencies file.
     more interesting use case is when building java based applications for example, we need jdk to compile the java source code but jdk is not needed to run the java application itself. that you might be using tools like `maven` or `gradle` to build your java application those are also not needed in the final image.
   - "Multi-Stagte" builds feature allows you to use multiple temporary.
     an example docker file with two build stages:

     ```dockerfile
     # Build stage

     FROM maven AS build

     WORKDIR /app

     COPY myapp /app

     RUN mvn package
     ```

     ```dockerfile
     # Run stage

     # we use the files generated in the previous build stage and copy them in the final iamge
     # so the final application image is created only in the last stage

     FROM tomcat

     COPY --from=build /app/target/file.war /usr/local/tomcat/myapp.war
     ```

1. Use the least privileged user

   - the bad security practices
     - container could potentially have root access on the Docker host default when a docker file does not specify a user, it uses a root user but reality there is mostly no reason to run container with root privileges
     - easier privilege escalation for an attacker. application inside the container with a root user will make it eaiser for an attacker to escalate privileges on the host and basically get hold of the underlying host and its processes,
       not only inside the container itself especially if the application inside the container is vulnerable to exploitation
   - to avoid this is simply create a dedicated user and the dedicated group in the docker

     ```dockerfile
     # create group and user
     RUN groupadd -r foo && useradd -g foo foo

     # set owership and permissions
     RUN chown -R foo:foo /app

     # switch to user
     USER foo

     CMD node index.js
     ```

     some base images have a generic user bundled in which you can use , so you don't have to create new one:

     ```dockerfile
     RUN node:10-alpline

     USER node

     CMD ["node", "index.js"]
     ```

1. Scan your images for vulnerabilities
   - uses the docker scan commands `docker scan [image-name]`
   - uses `snyk` to to the vulnerability scanning
   - configure docker hub to scan the images automatically
