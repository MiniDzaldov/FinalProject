
INSERT INTO HelpCategory(Code, [Type])
VALUES (1, 'Babysitting');

SET IDENTITY_INSERT HelpCategory ON
select * from HelpCategory
SET IDENTITY_INSERT HelpCategory OFF

SET IDENTITY_INSERT Adresses ON
INSERT INTO Adresses(Code, City, Street,NumOfBuilding, AptNumber, ZipCode)
VALUES (11, 'Ashdod', 'Shamay', 8, 13, 7765176);
SET IDENTITY_INSERT Adresses OFF
select * from Adresses

INSERT INTO Assists(Id, FirstName, LastName,NumOfChildren, PhoneNumber, Email, AddressCode, CategoryCode )
VALUES ('045221415', 'Chaya', 'Gross', 5, '0505441245', 'cg1245@gmail.com', 11, 1);
select * from Assists

SELECT asi.FirstName, asi.Email, a.City, a.Street, a.NumOfBuilding
FROM Assists as asi
JOIN Adresses as a ON asi.AddressCode=a.Code;

SELECT asi.FirstName, asi.Email, h.[Type]
FROM Assists as asi
JOIN HelpCategory as h ON asi.CategoryCode = h.Code;