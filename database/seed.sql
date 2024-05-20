\c love;

INSERT INTO users (username, password, email, profileImg, address, zipcode, rating, customerType, admin, joinedDate) VALUES
('test1', 'test1', 'test1@test.com', 'https://i.imgur.com/8puTSd9.png', '1 test rd', 11111, 3, 'member', false, NOW()),
('test2', 'test2', 'test2@test.com', 'https://i.imgur.com/MmLQSDV.png', '2 test rd', 22222, 1,'member', false, NOW()),
('test3', 'test3', 'test3@test.com', 'https://i.imgur.com/ZlrcYvd.png', '3 test rd', 33333, 5, 'member', true, NOW());

INSERT INTO photos (url, user_id) VALUES
('https://i.imgur.com/8puTSd9.png', 1),
('https://i.imgur.com/MmLQSDV.png', 2),
('https://i.imgur.com/ZlrcYvd.png', 3);