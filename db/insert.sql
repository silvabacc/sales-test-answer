insert into
  total_sales (model_id, revenue, units)
values
  (94, 72000.12, 168),
  (27, 444795.32, 946),
  (100, 90449.76, 893),
  (45, 81570.34, 537),
  (66, 151121.98, 48);

insert into 
  phones (model_id, model_name, brand, price, country, period)
values
  (94, 'iPhone 12', 'Apple', 999, 'GB', 1),
  (27, 'iPhone 13', 'Apple', 899, 'FR', 1),
  (100, 'Pixel', 'Google', 1300, 'GB', 1),
  (27, 'iPhone 13', 'Apple', 799, 'GB', 1),
  (45, 'Galaxy', 'Samsung', 800, 'PO', 2),
  (66, 'iPhone 14', 'Apple', 499, 'GB', 1),
  (45, 'Galaxy', 'Samsung', 600, 'DE', 2),
  (66, 'iPhone 14', 'Apple', 599, 'GB', 2),
  (66, 'iPhone 14', 'Apple', 699, 'DE', 2);
  
-- Write a query that aggregates all sales of smartphones in GB
-- Extend this query to involve all smartphones that are only iPhone 14
-- Extend this query to include the total revenue of iPhone 14 (hint, use the sales table)
-- Extend this query to include the total revenue of everything
-- Extend this query to calculate the percentage between the total sales and the total sales for iPhone 14
