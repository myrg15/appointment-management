<h1 align="center"> Appointments Management System</h1>​
​
<h2 align="center">Backend application for a tattoo studio centre</h2>

## Table of contents
- Title project
- Project description
- Reverse Engineer
- How to use the application
- Technologies Used
- Licence and copyright

### Project descriptión
We have started the proposal to develop a backend web application to simulate the management of appointments in a tattoo studio centre, in which we have mainly used the tools typeorm, mysql workbench, postman to generate different endpoints to the users that will enter the application. In this case we focus on the design of entity models to obtain a **customers** table composed of the following properties: id, username, email, password, phone_number, is_active, role, where it has a relation  

>>  @OneToMany(() => Appointment, (appointment) => appointment.customers)
>>appointments!: Appointment[];

then we find the entity **tattooartist** with the properties id, username, email, phone_number, password, is_active, role, with a relationship of 
>> @OneToMany(() => Appointment, (appointment) => appointment.tattooartist)
>> appointments!: Appointment[];

>>@OneToMany(() => Desingallery, (desingallery) => desingallery.tattooartist)
>>desingallerys!: Desingallery[];

then the **appointment** entity with the properties id, date, sessions, availability, time with a relation  

>>@ManyToOne(() => Customers, (customers)=>customers.appointments)
>> @JoinColumn({name: "customers_id"})
>> customers!: Customers [];
  
>>@ManyToOne(() => Tattooartist, (tattooartist) => tattooartist.appointments)
>>@JoinColumn({name: "tattooartist_id"})
>>tattooartist!: Tattooartist [];

and finally the **desingallery** entity with properties id, name, date, imag, description, with a relationship of 
>> @ManyToOne(() => Tattooartist, (tattooartist) => tattooartist.desingallerys)
>>@JoinColumn({name: "tattooartist_id"})
>>tattooartist!:Tattooartist;

### Reverse Engineer
![Diagram BBDD](./img/diagram_entity_relationship.JPG)

### how to use the application
- **install vscode extension Thunderclient or postman**
- **Install node**  
- **install express**  
- **install typeORM**  
- **install dotenv** 
- **install mysql workbench** 
- run the command **npm run dev**  in the terminal
- create a user by inserting directly BBDD
​
### Technologies Used
​
<p align = "center" display= "flex">
  <tr >
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="60"></td>
    <td valign="top"><img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="60"></td>
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png" width="80"></td>
    <td valign="top"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png" width="60"></td>
    <td valign="top"><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png width="55"></td>
     <td valign="top"><img src="https://avatars.githubusercontent.com/u/20165699?v=4" width="60"></td>

### Endpoints

### customer/register
>> POST   http://localhost:4000/customer/register
>>{
  >>"success": true,
  >>"message": "user created succesfully",
  >>"customer": {
  >>"username": "jose",
  >>"email": "jomo@gmail.com",
  >>"password": "$2b$10$evszSUD9EUbtGenfDHe0cuHakneXnoCSYrSJWIM2HmiuBvoKFD5rC",
  >>"phone_number": "8299236045",
  >>"customers_id": 3
  >>}
>>}

### Grateful
First of all to my colleagues who have contributed their opinions at opportune moments to make all the information seen in the classroom more fluid, to the existence of applications such as stack overflow, tutorials on the subject.  
​
### Licence and copyright

📝 The copyright belongs to me Meriyen Rodriguez, in this web application proposed by the Geekshubs academy as the first backend version to later give continuity to the fronend version.
