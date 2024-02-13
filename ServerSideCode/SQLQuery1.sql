
create table Adresses(
 Code int primary key identity(1,1),
 City nvarchar(50) not null,
 Street nvarchar(50) not null,
 NumOfBuilding int not null,
 AptNumber int not null,
 ZipCode int not null
 )

 create table HelpCategory(
 Code int primary key identity(1,1),
 Type nvarchar(50) not null,
 )

 create table Users(
 Id nvarchar(9) primary key ,
 Name nvarchar(50) not null,
 Password nvarchar(10) not null,
 Role nvarchar(10) not null
 )

 create table Assistants(
 Id nvarchar(9) primary key ,
 FirstName nvarchar(20) not null,
 LastName nvarchar(20),
 Age int,
 PhoneNumber nvarchar(10) not null,
 Email nvarchar(20) not null,
 AddressCode int not null,
 CategoryCode int not null,
 Constraint FK_Assistants_Adresses Foreign Key (AddressCode) 
 References  Adresses(Code),
 Constraint FK_Assistants_HelpCategory Foreign Key (CategoryCode) 
 References  HelpCategory(Code)
 )

 create table Assists(
 Id nvarchar(9) primary key ,
 FirstName nvarchar(20) not null,
 LastName nvarchar(20),
 NumOfChildren int ,
 PhoneNumber nvarchar(10) not null,
 Email nvarchar(20) not null,
 AddressCode int not null,
 CategoryCode int not null,
 Constraint FK_Assists_Adresses Foreign Key (AddressCode) 
 References  Adresses(Code),
 Constraint FK_Assists_HelpCategory Foreign Key (CategoryCode) 
 References  HelpCategory(Code)
 )

