create TABLE Adminn (
    AdminName varchar(50),
	AdminPassword int,
	PRIMARY KEY (AdminName),
); 
insert into adminn values('mohamed',1234);

CREATE TABLE Clerk (
    ClerkName varchar(50),
	ClerkPassword int,
	PRIMARY KEY (ClerkName),
);
insert into Clerk values('asmaa',123);
insert into Clerk values('aalaa',123);



CREATE TABLE Passenger (
    PassName varchar(50),
    PassEmail varchar(80),
	PassPassword int,
	PassGender bit,
	PassAge int,
	passcard int,
	PRIMARY KEY (PassName),
); 

insert into Passenger values ('ahmed','ahmed@gmail.com',1111,1,15,11111111);
insert into Passenger values ('mahmoud','mahmoud@gmail.com',2222,1,60,11111111);
insert into Passenger values ('ibrahim','ibrahim@gmail.com',3333,1,20,11111111);
insert into Passenger values ('doaa','ibrahim@gmail.com',4444,0,22,11111111);

CREATE TABLE Coach (
    CoachID int,
    Coachclass varchar(50),
	PRIMARY KEY (CoachID),

); 
insert into Coach values (1,'class a');
insert into Coach values (2,'class b');
insert into Coach values (3,'class c');

CREATE TABLE Train (
    TID int,
    TrainName varchar(50),
    TrainSeq varchar (max),
	CoachID int,
	FOREIGN KEY (CoachID) REFERENCES Coach(CoachID),
	Constraint PK_Train PRIMARY KEY Train( TID ,CoachID)
);

insert into Train values (900,'asbani','alex-tanta-benha-cairo',1);
insert into Train values (900,'asbani','alex-tanta-benha-cairo',2);
insert into Train values (900,'asbani','alex-tanta-benha-cairo',3);
  
insert into Train values (901,'almani','alex-tanta-benha-cairo',1);
insert into Train values (901,'almani','alex-tanta-benha-cairo',2);
insert into Train values (901,'almani','alex-tanta-benha-cairo',3);

insert into Train values (902,'almani','cairo-benha-tanta-alex',1);
insert into Train values (902,'almani','cairo-benha-tanta-alex',2);
insert into Train values (902,'almani','cairo-benha-tanta-alex',3);

insert into Train values (903,'asbani','cairo-benha-tanta-alex',1); 
insert into Train values (903,'asbani','cairo-benha-tanta-alex',2);
insert into Train values (903,'asbani','cairo-benha-tanta-alex',3);
select*from Train;
create table travels (TrainID int,
Alex varchar(30),
Tanta varchar(30),
Benha varchar(30),
cairo varchar(30),
 
);
insert into travels values (900,'11:00:00','12:20:00','12:45:00','13:45:00');
insert into travels values (901,'09:00:00','10:00:00','10:30:00','11:15:00');
insert into travels values (902,'17:45:00','16:45:00','16:20:00','15:00:00');
insert into travels values (903,'17:15:00','16:30:00','15:00:00','14:00:00');


CREATE TABLE Station (
    StationID int,
    StationName varchar(50),
	PRIMARY KEY (StationID),
); 
insert into station values (1,'alex');
insert into station values (2,'tanta');
insert into station values (3,'benha');
insert into station values (4,'cairo');



CREATE TABLE Seat (
    SeatID int,
    CoachID int,	
	PRIMARY KEY (SeatID),
	FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
); 

CREATE TABLE Wait (
    WaitID int,
    TrainID int,
    StationID int,
	InTime Time,
	OutTime Time,
	PRIMARY KEY (WaitID),
	FOREIGN KEY (StationID) REFERENCES Station(StationID),
); 

CREATE TABLE Booking (
    FromStat varchar,
	ToStat varchar ,
	TravelDate Date,
	TravelTime varchar(55),
	TrainID int,
	class int,
	BookDate Date,
	BookTime Time,
	); 



