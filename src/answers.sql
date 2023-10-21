1. SELECT email FROM customers ORDER BY email;

2. SELECT id FROM orders
    WHERE customer_id =
        (SELECT id from customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

3. SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

4. SELECT c.name,SUM(o.num_cupcakes) 
FROM cupcakes c
LEFT JOIN orders o
ON c.id = o.cupcake_id
GROUP BY c.name
ORDER BY c.name;

5. SELECT c.email, SUM(o.num_cupcakes)
FROM customers c
LEFT JOIN orders o
ON c.id = o.customer_id
GROUP BY c.email
ORDER BY c.email;

6. SELECT DISTINCT c.fname, c.lname, c.email
From customers c
LEFT JOIN orders o 
ON c.id = o.customer_id
WHERE cupcake_id = 5 AND processed = 't';