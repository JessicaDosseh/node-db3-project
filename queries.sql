-- Multi Table Queries
------------------------

-- Display the ProductName and CategoryName for all products in the database. 
--Returns 77 records.
SELECT ProductName, CategoryName
FROM [product] AS p
JOIN [category] AS c
ON p.CategoryID = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. 
--Returns 429 records.
SELECT o.id, s.companyName
FROM [shipper] AS s
JOIN [order] AS o 
ON o.shipVia = s.id
WHERE o.orderDate < "2012-08-09"
ORDER BY o.orderDate DESC;


-- Display the name and quantity of the products ordered in order with Id 10251. 
--Sort by ProductName. Returns 3 records.
SELECT p.ProductName, p.QuantityPerUnit
FROM [orderDetail] AS o
JOIN [product] AS p
ON p.id = o.productId
WHERE o.orderId = 10251
ORDER BY ProductName ASC;


-- Display the OrderID, customer's Company Name and the employee's Last Name for every order. 
-- All columns should be labeled clearly. Returns 16,789 records.
SELECT o.id, c.CompanyName, e.LastName
FROM [order] AS o
JOIN [customer] AS c ON o.CustomerID = c.id
JOIN [employee] AS e ON o.EmployeeID = e.id


--_________________________________________________________________________--
--_________________________________________________________________________--

-- Stretch Problems
------------------------
-- In SQL Try Editor at W3Schools.com: https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top 

-- Displays CategoryName and a new column called Count that shows how many products 
-- are in each category. Shows 8 records.



-- Display OrderID and a column called ItemCount that shows the total number of products 
-- placed on the order. Shows 196 records.