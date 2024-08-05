\c love;

INSERT INTO users (username, password, email, profileImg, address, zipcode, customerType, admin, region, province, city, town,dob,firebase_id, joinedDate) VALUES
('test1', 'testA', 'test1@test.com', 'https://i.imgur.com/8puTSd9.png', '1 test rd', 11111, 'member', false, 'NA', 'CA', 'LA', 'Compton','01/01/01' ,1,NOW()),
('test2', 'testB', 'test2@test.com', 'https://i.imgur.com/MmLQSDV.png', '2 test rd', 22222,'member', false,'NA', 'CA', 'LA', 'Compton','01/01/01' ,2, NOW()),
('test3', 'testC', 'test3@test.com', 'https://i.imgur.com/ZlrcYvd.png', '3 test rd', 33333, 'member', true,'NA', 'CA', 'LA', 'Compton' ,'01/01/01',3, NOW()),
('test4', 'testD', 'test4@test.com', 'https://i.imgur.com/8puTSd9.png', '1 test rd', 11111, 'member', false,'NA', 'CA', 'LA', 'Compton','01/01/01' ,4,NOW()),
('test5', 'testE', 'test5@test.com', 'https://i.imgur.com/MmLQSDV.png', '2 test rd', 22222,'member',false, 'NA', 'CA', 'LA', 'Compton','01/01/01' ,5, NOW()),
('test6', 'testF', 'test6@test.com', 'https://i.imgur.com/ZlrcYvd.png', '3 test rd', 33333, 'member', true,'NA', 'CA', 'LA', 'Compton','01/01/01' ,6, NOW());

INSERT INTO photos (url, user_id) VALUES
('https://i.imgur.com/8puTSd9.png', 1),
('https://i.imgur.com/MmLQSDV.png', 2),
('https://i.imgur.com/ZlrcYvd.png', 3);

INSERT INTO relationships (user_id, partner_id, status) VALUES
(1, 2, 'pending'),
(2, 3, 'accepted');


INSERT INTO locations (lat, lng) VALUES
('123.123', '123.123'),
('456.456', '456.456'),
('789.789', '789.789');

INSERT INTO board (owner_id, constributors_id, title, description) VALUES
(1, '{1,2}', 'test 1s board', 'test1 description'),
(2, '{3,4}', 'test 2s board', 'test2 description'),
(3, '{5,6}', 'test 3s board', 'test3 description');