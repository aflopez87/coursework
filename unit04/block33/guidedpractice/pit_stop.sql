--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pit_stop; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE pit_stop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


\connect pit_stop

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: vehicles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vehicles (
    id text NOT NULL,
    color text NOT NULL,
    fuel text NOT NULL,
    manufacturer text NOT NULL,
    model text NOT NULL,
    type text NOT NULL,
    date timestamp(3) without time zone NOT NULL
);


--
-- Data for Name: vehicles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.vehicles (id, color, fuel, manufacturer, model, type, date) FROM stdin;
KW87HML	white	Gasoline	Dodge	CX-9	Wagon	2026-08-31 20:06:48.179
OR94YTB	pink	Electric	Chevrolet	A8	Passenger Van	2012-01-14 13:21:21.694
CX70CFY	yellow	Gasoline	Volkswagen	Volt	Passenger Van	2050-02-14 05:17:54.356
ER97NKQ	tan	Hybrid	NIO	2	Convertible	2051-01-06 17:10:40.583
AW36ZLX	ivory	Diesel	Cadillac	Aventador	Extended Cab Pickup	2066-08-08 06:38:51.785
IL94NPE	magenta	Diesel	Mitsubishi	CTS	Cargo Van	2018-03-05 04:28:20.414
VN00ORY	silver	Diesel	Smart	Escalade	Sedan	2018-09-07 03:10:46.682
FU11DMZ	silver	Electric	BYD	Colorado	Crew Cab Pickup	2033-09-26 17:20:08.111
WU02QCU	green	Gasoline	MG	Prius	Wagon	2063-03-07 23:47:53.296
FC13TRD	turquoise	Electric	Polestar	Accord	Cargo Van	2077-03-02 12:35:49.421
ZS89OKN	turquoise	Diesel	Kia	Ranchero	Cargo Van	2067-04-27 13:40:30.088
HG36TOT	maroon	Diesel	Bentley	Golf	Hatchback	1998-12-29 12:50:19.308
SU63DZI	white	Electric	Nissan	Countach	Hatchback	2075-05-06 21:26:55.727
IY86RIL	sky blue	Hybrid	Skoda	Grand Caravan	Crew Cab Pickup	2023-10-23 18:58:56.887
GP05OWK	purple	Gasoline	Fiat	Grand Caravan	Sedan	2051-05-01 04:18:44.398
YJ61HBU	purple	Hybrid	Chevrolet	Challenger	Coupe	2059-06-21 15:24:42.955
OO95XRK	turquoise	Electric	Porsche	Sentra	Coupe	2037-11-15 16:16:49.884
WZ43SGV	green	Diesel	Tata	Element	Minivan	1994-12-12 15:25:05.247
LG60DUS	sky blue	Gasoline	Volkswagen	Civic	Sedan	2054-10-05 05:45:13.824
EL93RAD	green	Diesel	Skoda	Explorer	Wagon	2007-05-11 16:32:14.95
GH61ZEU	salmon	Hybrid	Mazda	Grand Cherokee	Wagon	2052-01-05 22:33:30.996
WY34TSP	teal	Hybrid	Maruti	Grand Cherokee	Crew Cab Pickup	2076-05-08 00:53:03.139
YU61CMQ	orange	Diesel	Maserati	Explorer	Crew Cab Pickup	2065-12-20 07:04:17.351
XY33PUC	ivory	Electric	Rivian	Golf	Sedan	2016-01-16 17:38:15.249
OQ39BDI	maroon	Hybrid	Vauxhall	PT Cruiser	Convertible	1996-10-29 06:48:02.109
OW41ZID	gold	Electric	Skoda	Colorado	Convertible	1991-08-24 11:20:04.598
XX89XVF	orchid	Electric	Lamborghini	Civic	Wagon	2003-01-21 18:32:19.002
QL20FPK	maroon	Gasoline	MG	Explorer	Sedan	2033-04-12 19:13:28.777
JG82IRX	red	Hybrid	BMW	XC90	Crew Cab Pickup	1983-05-25 16:47:00.807
IR86QQU	gold	Hybrid	Aston Martin	Accord	Extended Cab Pickup	1987-02-24 07:33:58.936
YU58OVJ	orange	Diesel	Aston Martin	Mercielago	Hatchback	2012-04-30 04:32:21.893
BW18MYQ	purple	Gasoline	Ford	XC90	Minivan	2045-08-06 01:03:52.1
XU40QPL	gold	Hybrid	Fiat	Model S	SUV	1986-11-13 07:05:42.007
QX18GTR	purple	Diesel	Maruti	Cruze	Coupe	2019-10-12 07:40:33.406
VY72NDP	purple	Gasoline	Polestar	El Camino	Sedan	2037-08-04 21:38:03.616
MR20DKC	green	Diesel	Jeep	V90	Coupe	2014-08-02 00:37:48.052
ZB30QBR	plum	Gasoline	Toyota	Ranchero	Minivan	2021-11-06 15:20:18.402
IZ26PHC	salmon	Diesel	Fiat	Cruze	SUV	2024-02-02 20:50:05.86
AA06MAO	white	Electric	Polestar	Mercielago	Minivan	2050-04-29 01:43:03.858
XG12XQJ	grey	Diesel	Porsche	Prius	Hatchback	2066-11-28 17:16:19.711
RZ74LBI	blue	Hybrid	Suzuki	PT Cruiser	Hatchback	2054-03-03 21:09:00.836
UE32OLP	pink	Diesel	Cadillac	Wrangler	Minivan	2058-05-20 07:45:21.837
UE49KRH	azure	Diesel	Chrysler	XTS	Crew Cab Pickup	2061-08-29 19:24:04.116
CJ59QDP	black	Hybrid	Jeep	Accord	Cargo Van	2054-11-08 23:30:05.336
TU32NWH	ivory	Electric	Nissan	Sentra	Convertible	2037-08-25 14:25:22.117
VA55KXG	ivory	Gasoline	Dodge	Volt	SUV	2068-03-10 15:04:06.851
AC43UEL	teal	Electric	Bugatti	Prius	Minivan	2008-03-09 20:02:37.341
CC78TQG	lime	Gasoline	Lamborghini	Grand Cherokee	Minivan	1996-07-05 22:57:41.503
FH64OVH	sky blue	Hybrid	Lamborghini	CX-9	Crew Cab Pickup	2064-05-04 10:39:09.757
OU60YHT	violet	Electric	Audi	Colorado	Crew Cab Pickup	2047-03-21 02:44:57.917
DE55SWA	ivory	Diesel	Audi	Beetle	Hatchback	2070-05-29 04:27:56.887
RC01OJR	turquoise	Gasoline	Smart	Taurus	Sedan	2056-12-26 21:15:21.964
CE16UTY	fuchsia	Gasoline	Chevrolet	Expedition	Sedan	2076-07-06 16:03:21.448
UN89LNW	olive	Gasoline	Mini	Impala	Coupe	2015-10-08 03:42:37.009
QZ11ZJT	lavender	Electric	Skoda	Fortwo	Wagon	2058-04-01 18:00:51.961
DR27COJ	lime	Gasoline	Ferrari	Camry	Passenger Van	2074-09-16 23:17:12.776
DI09EET	teal	Diesel	Toyota	Civic	Coupe	2020-10-07 21:45:01.458
RS67WYO	turquoise	Hybrid	Bentley	Alpine	Passenger Van	2010-09-02 14:12:36.685
ZB21CLH	red	Electric	Fiat	Taurus	Minivan	1982-09-18 03:38:44.446
VP09JAK	gold	Diesel	MG	Model 3	Wagon	1997-02-27 08:18:15.616
VS87BFC	silver	Hybrid	NIO	Camry	Passenger Van	1989-12-02 19:51:15.855
GJ22EZU	azure	Electric	Mahindra & Mahindra	Roadster	Hatchback	1999-10-19 22:54:37.422
NX13STS	magenta	Electric	Renault	Model X	SUV	2039-01-20 16:37:04.117
QS68KNM	black	Diesel	MG	Model X	Minivan	2065-05-31 16:49:27.381
MH11VSN	lime	Gasoline	Tesla	Impala	Hatchback	2022-05-07 13:27:14.242
DD08RAD	grey	Hybrid	BMW	Fortwo	Passenger Van	2021-06-16 01:23:02.027
AW13YHP	turquoise	Electric	NIO	1	SUV	2059-02-23 07:47:07.657
IB59CDU	pink	Electric	Polestar	Cruze	Extended Cab Pickup	2077-08-20 10:30:15.328
OU33KHJ	mint green	Hybrid	Vauxhall	1	Wagon	2021-06-03 12:13:08.345
QX72CSS	lime	Electric	Mahindra & Mahindra	Wrangler	Coupe	2043-04-14 06:35:01.692
FO26FRC	blue	Electric	Mercedes Benz	Explorer	SUV	2017-01-02 22:48:59.851
HC24BSW	ivory	Gasoline	Chevrolet	Escalade	Sedan	2036-07-02 10:04:30.086
WT78KXR	purple	Diesel	Mini	Corvette	Convertible	2072-04-30 14:35:06.012
CW41LDE	magenta	Hybrid	Skoda	A4	Passenger Van	2044-02-09 17:57:46.792
OV19BGO	olive	Hybrid	Lamborghini	911	Coupe	2025-05-30 15:39:00.924
SH38VZD	mint green	Gasoline	Chrysler	Model X	Hatchback	2071-04-04 23:41:29.963
OV42KFP	grey	Hybrid	Subaru	Grand Cherokee	Cargo Van	2075-06-17 06:46:51.644
XB32TGI	tan	Diesel	Tata	PT Cruiser	Convertible	2021-03-05 09:02:37.684
ZU07AMJ	lavender	Hybrid	Bentley	Escalade	Wagon	2032-07-31 22:00:20.252
DW39QQM	red	Gasoline	Lamborghini	Aventador	Hatchback	2049-02-25 06:59:26.299
NZ64VWS	cyan	Diesel	Mahindra & Mahindra	2	Hatchback	2052-12-29 02:43:21.329
OC35NSY	turquoise	Electric	Mahindra & Mahindra	Focus	Extended Cab Pickup	2001-10-14 09:37:03.603
JQ21TPE	purple	Diesel	Chevrolet	Jetta	Crew Cab Pickup	2001-11-29 06:24:50.274
NX61UDS	yellow	Diesel	Dodge	Ranchero	Hatchback	2074-06-15 20:57:06.128
QZ46FKO	white	Hybrid	Maserati	Countach	Cargo Van	2054-08-02 17:43:22.412
UP90MGR	lavender	Electric	Suzuki	Expedition	Passenger Van	2012-07-04 02:25:48.909
DZ76GKP	grey	Hybrid	Mercedes Benz	2	Wagon	2060-07-05 19:18:22.159
XD34UGY	purple	Gasoline	Mercedes Benz	Challenger	Extended Cab Pickup	2032-05-25 06:18:02.019
BE06QQR	silver	Electric	Dodge	Element	Hatchback	1988-10-23 13:21:24.336
HS65WMH	blue	Diesel	Mazda	CX-9	Convertible	2016-03-06 22:18:12.049
HN12OWP	violet	Electric	Vauxhall	LeBaron	Extended Cab Pickup	2032-12-29 00:54:32.047
QW64ZIN	plum	Hybrid	Rivian	Volt	Passenger Van	2066-04-01 05:04:30.263
QK36KDV	teal	Diesel	Renault	CTS	Minivan	1985-02-25 04:31:16.605
DU88OGH	yellow	Diesel	Peugeot	Sentra	Passenger Van	1988-04-08 15:55:20.764
RV04QSS	red	Electric	Fiat	Camaro	Convertible	1992-05-14 19:58:11.615
JK71LUE	silver	Gasoline	Jeep	2	Convertible	1984-11-22 17:54:17.544
OQ61NRC	magenta	Diesel	Maserati	Sentra	Minivan	2022-04-20 19:39:03.255
RB68QOS	silver	Gasoline	Bugatti	F-150	Sedan	2074-08-21 04:34:19.677
IQ61YCJ	black	Gasoline	Smart	CX-9	SUV	2016-03-14 02:39:29.114
XW57SFI	teal	Electric	Mercedes Benz	CX-9	Minivan	2057-02-11 15:25:11.982
WW63EQY	blue	Diesel	Land Rover	Wrangler	Cargo Van	2024-04-21 11:52:26.946
UZ06YYX	white	Electric	Volkswagen	Grand Cherokee	Wagon	1984-07-03 05:40:10.34
OM78NKQ	turquoise	Electric	Smart	Model Y	Sedan	2044-03-31 09:48:22.133
VW84BAB	mint green	Diesel	Tesla	Charger	Crew Cab Pickup	2024-08-25 13:20:37.014
KT31PWH	sky blue	Diesel	Land Rover	CX-9	Convertible	2044-10-08 21:04:11.113
DU40TAZ	teal	Hybrid	Fiat	Ranchero	Minivan	2027-06-17 04:06:34.216
IK79OHW	sky blue	Hybrid	Skoda	Alpine	SUV	2002-06-19 15:51:01.989
CH70JLX	lavender	Electric	Peugeot	XC90	Convertible	2022-12-01 06:02:44.557
CT23DIB	indigo	Diesel	Volkswagen	Element	Cargo Van	2077-01-23 09:08:30.5
AG20PZZ	purple	Gasoline	Peugeot	Accord	SUV	2060-08-15 05:05:43.941
YB28ARZ	purple	Gasoline	Renault	Prius	Minivan	2068-11-21 11:38:10.749
IE55PMD	black	Hybrid	Renault	CTS	Sedan	2060-09-12 06:01:04.078
UK39WAL	salmon	Hybrid	Aston Martin	Countach	Passenger Van	2000-07-05 21:38:20.114
WD34BCD	orange	Diesel	Subaru	Jetta	Hatchback	2001-12-10 11:08:09.416
AZ28SSA	mint green	Diesel	BMW	2	Passenger Van	1988-09-08 08:07:17.174
PS21HJD	black	Gasoline	Ford	Colorado	Coupe	2064-04-07 17:38:53.641
AR48PJH	mint green	Electric	Maruti	Land Cruiser	Hatchback	2027-09-22 01:22:07.415
NG93UJR	turquoise	Hybrid	Maserati	Focus	Cargo Van	1992-04-27 00:18:54.414
WA45XRA	grey	Gasoline	Citroën	Model Y	Passenger Van	2007-10-01 08:06:51.872
MW11MRR	silver	Diesel	Ford	Durango	Hatchback	1984-01-08 07:22:16.463
QI65ABX	cyan	Diesel	Smart	Grand Cherokee	Hatchback	1999-10-16 04:50:19.004
YP97YYT	silver	Electric	Cadillac	Land Cruiser	Extended Cab Pickup	2052-08-18 01:02:57.769
OI82DRE	purple	Diesel	Audi	Mustang	Extended Cab Pickup	2010-05-20 13:28:59.289
YS53AJH	pink	Hybrid	Rivian	Model S	Passenger Van	1998-09-07 11:03:42.451
BT54IHL	turquoise	Gasoline	Bentley	Grand Caravan	Crew Cab Pickup	1996-11-06 10:02:53.344
LE63VNK	lime	Electric	Bugatti	Ranchero	Wagon	2032-07-20 13:52:05.483
XO72DTD	turquoise	Hybrid	Tesla	Mustang	Cargo Van	2055-06-03 06:51:19.761
KK75CFY	violet	Electric	Lamborghini	El Camino	Convertible	2015-12-19 16:44:40.432
ZR77KTJ	pink	Electric	Mitsubishi	Beetle	Sedan	2046-03-17 11:39:32.832
RE88MIL	grey	Electric	Ferrari	Durango	Extended Cab Pickup	2006-08-20 02:58:04.271
EE25WVF	ivory	Electric	Land Rover	Focus	Sedan	2076-06-25 12:02:36.906
VN78DTE	teal	Electric	Dodge	1	Wagon	1981-07-05 17:20:40.526
OQ29GUR	maroon	Hybrid	Mahindra & Mahindra	Fiesta	Passenger Van	2056-03-12 18:38:05.076
MW23QXU	azure	Diesel	Skoda	LeBaron	Sedan	1988-07-10 20:38:25.814
GE05SDM	blue	Electric	NIO	Fortwo	Sedan	2036-03-31 00:33:57.545
AA80FKB	silver	Diesel	Bugatti	Durango	Hatchback	1984-07-27 00:22:37.176
YQ66XWN	plum	Diesel	Skoda	Malibu	Hatchback	2059-07-10 22:02:46.03
PC60AUQ	orange	Hybrid	Chrysler	Grand Cherokee	Passenger Van	2007-03-18 13:43:39.584
AJ35SLD	blue	Hybrid	Aston Martin	Sentra	Coupe	2036-02-06 12:50:39.665
MR82DDB	cyan	Gasoline	Bentley	Alpine	Wagon	2001-02-17 23:21:47.566
KV93FAB	red	Diesel	Lamborghini	Challenger	Hatchback	1985-05-25 08:11:31.534
RF60NQG	orchid	Diesel	Mini	A4	Minivan	1982-07-03 03:06:21.067
BG94AIS	lime	Diesel	Maserati	Malibu	Coupe	1984-03-30 19:03:40.32
JL47GNI	yellow	Hybrid	Bentley	Ranchero	Hatchback	2040-08-31 00:46:40.488
CX16VQG	black	Diesel	Lamborghini	Ranchero	Coupe	2071-06-25 09:16:01.472
PV17UKO	white	Electric	Aston Martin	CX-9	Convertible	2047-09-02 19:37:22.102
MT57XSU	fuchsia	Diesel	Mitsubishi	Model S	Coupe	2042-11-07 09:19:22.786
FJ72CDQ	teal	Hybrid	MG	XTS	Hatchback	1986-05-03 01:24:58.357
BS71XUQ	blue	Gasoline	Hyundai	Land Cruiser	Wagon	2041-08-18 00:10:32.142
PK84TEQ	mint green	Diesel	Mazda	Golf	Hatchback	2053-09-13 07:48:43.099
HS12DUI	maroon	Gasoline	Chevrolet	Model 3	Extended Cab Pickup	2038-11-24 15:04:53.257
WB75NBF	indigo	Diesel	NIO	Escalade	Wagon	1982-04-08 14:53:29.416
JI88DET	silver	Gasoline	Mazda	Expedition	Minivan	1980-11-23 06:41:20.052
JJ46YCQ	indigo	Diesel	Mazda	ATS	Wagon	2056-11-17 15:46:18.273
BT00AKA	cyan	Hybrid	Renault	Civic	Sedan	2033-06-07 10:13:21.936
HE13CJA	black	Hybrid	Bugatti	A8	Passenger Van	2010-12-16 21:53:14.443
AO74ZZB	lime	Electric	Smart	Model 3	Passenger Van	2011-07-01 15:58:57.596
ZM44FIJ	grey	Electric	Smart	Alpine	Convertible	2075-07-24 12:30:43.787
US46HYA	orange	Electric	Maruti	Grand Caravan	Passenger Van	2041-11-27 03:40:45.384
ZO14TNT	sky blue	Gasoline	Jaguar	Fiesta	SUV	2020-10-09 00:16:22.304
PY41ZYE	orange	Electric	Tata	Grand Caravan	Convertible	2070-07-15 09:28:59.011
MR26UJG	salmon	Electric	Dodge	Model 3	Extended Cab Pickup	2023-11-02 06:15:48.869
NR82EUR	gold	Diesel	Mazda	Camaro	Hatchback	2073-07-13 15:43:02.334
RL00STQ	blue	Diesel	Honda	Prius	Convertible	1988-01-26 16:07:43.903
ES57VPV	pink	Gasoline	Mercedes Benz	A8	Hatchback	2059-02-19 19:23:56.215
BQ95AUV	azure	Electric	Ford	XTS	Crew Cab Pickup	2056-06-07 14:08:18.91
ZX77SNA	magenta	Gasoline	Lamborghini	Alpine	Crew Cab Pickup	1982-10-08 16:50:05.985
RU48YMB	fuchsia	Hybrid	Audi	XC90	Sedan	1996-10-12 17:32:27.991
XY39CXM	grey	Electric	Ford	Grand Caravan	Hatchback	2054-10-07 04:20:45.224
OF34LVM	yellow	Gasoline	Dodge	Golf	Passenger Van	2014-01-25 21:14:24.386
LN69HFX	magenta	Gasoline	Ford	Ranchero	Hatchback	2068-02-24 13:34:01.984
IS78NPV	sky blue	Electric	Hyundai	Model T	Wagon	2020-11-28 06:19:28.528
BU88PCE	indigo	Gasoline	Skoda	Taurus	Convertible	1996-05-09 21:47:50.917
NM29LHV	mint green	Gasoline	Skoda	Model X	Wagon	2017-01-19 18:55:25.196
WH70JNM	azure	Electric	Toyota	Model 3	Cargo Van	2042-05-13 11:38:35.344
JO07WCS	turquoise	Hybrid	Mini	Mustang	Wagon	1985-09-28 00:12:45.791
FM30HZF	lime	Diesel	Mercedes Benz	LeBaron	Extended Cab Pickup	1998-07-09 22:02:19.344
WY59PRQ	green	Diesel	Tata	A4	Cargo Van	2017-01-07 10:35:11.636
BV23NTE	cyan	Electric	Bugatti	Model S	Sedan	2046-07-31 08:02:04.584
TP46VZY	salmon	Gasoline	Volkswagen	Durango	Wagon	2068-06-01 12:25:23.119
PD91EMF	orchid	Gasoline	Maserati	Altima	Coupe	2002-09-30 05:25:13.29
EA94BGZ	magenta	Gasoline	Polestar	ATS	Minivan	2061-04-02 21:21:27.405
ST33ZSE	grey	Hybrid	Rivian	Alpine	Minivan	2055-12-14 07:18:08.908
AE58ZVL	orange	Electric	Suzuki	Golf	Hatchback	2076-05-08 16:28:36.549
GE04XME	purple	Hybrid	Mercedes Benz	Fortwo	Extended Cab Pickup	2004-03-01 18:17:09.441
UI64BEH	magenta	Hybrid	Polestar	911	Passenger Van	2010-11-15 05:37:28.425
HV82VUD	fuchsia	Gasoline	Jeep	Expedition	Sedan	2075-09-11 13:04:52.079
BW15JAC	sky blue	Diesel	MG	Jetta	Minivan	2035-07-11 07:58:51.763
FF20SHV	cyan	Hybrid	Maruti	Expedition	Wagon	1982-12-14 08:21:14.331
EH99IVC	fuchsia	Electric	Chevrolet	Camaro	Convertible	2064-03-24 11:55:36.124
OX41FUZ	sky blue	Hybrid	Mazda	A4	SUV	2004-09-19 18:48:37.531
JQ48PAP	tan	Electric	Skoda	Sentra	Coupe	2066-01-19 23:52:26.285
BJ51JOC	violet	Gasoline	Volvo	Sentra	Cargo Van	2042-02-03 14:11:11.715
EH86VLM	magenta	Gasoline	Mitsubishi	Model Y	Passenger Van	2078-08-01 12:44:05.339
HG42KZI	yellow	Diesel	BYD	Accord	Minivan	2044-07-12 14:04:32.342
BN96LLK	red	Diesel	Porsche	Charger	Minivan	2023-09-24 08:14:04.091
PX35LTP	yellow	Gasoline	Toyota	Malibu	Extended Cab Pickup	1991-06-19 05:32:08.545
EB38RIP	magenta	Diesel	BYD	El Camino	Cargo Van	2059-08-20 11:33:55.04
VT45KXJ	black	Gasoline	Nissan	Model T	SUV	2050-07-25 00:17:32.488
OF12BRT	grey	Electric	Mini	Mustang	Sedan	2018-06-28 07:31:55.638
FY08TCS	lime	Hybrid	Audi	Jetta	Coupe	1998-07-10 09:43:29.244
ZI22XVN	turquoise	Diesel	Tata	Challenger	Coupe	2065-10-03 17:08:13.784
HT22PTT	salmon	Diesel	Ford	Sentra	Minivan	2054-07-14 23:05:20.236
PG46GHS	purple	Hybrid	Rolls Royce	LeBaron	Cargo Van	1987-01-07 05:24:18.619
LZ20ZZM	teal	Gasoline	Volkswagen	Ranchero	Passenger Van	1989-06-19 02:43:15.45
FY26EAR	black	Gasoline	Vauxhall	CX-9	Extended Cab Pickup	2007-09-24 10:54:46.478
GV27AJX	lavender	Diesel	Suzuki	2	Extended Cab Pickup	2031-01-01 12:21:27.965
NR92KFC	red	Diesel	Chrysler	Spyder	SUV	2038-08-24 04:36:09.986
BO70WNE	gold	Hybrid	Mahindra & Mahindra	2	Cargo Van	1994-03-10 20:02:18.29
HI73KNN	pink	Electric	Skoda	Charger	Wagon	2078-07-03 20:38:25.601
FN36GXI	yellow	Gasoline	Maruti	Beetle	Coupe	2040-05-24 03:33:07.2
AX17WAK	orchid	Diesel	Citroën	Land Cruiser	Wagon	1985-02-23 20:19:09.007
QA07YUR	orange	Hybrid	Toyota	Model S	Sedan	2000-02-09 03:31:46.981
QP60RTF	plum	Diesel	Mahindra & Mahindra	911	Convertible	1982-12-12 14:39:53.705
QK96HYV	black	Diesel	Nissan	El Camino	Passenger Van	2049-09-06 11:57:56.131
NW46YPI	salmon	Hybrid	Lamborghini	Land Cruiser	Passenger Van	2057-10-16 10:42:52.368
NT05LJK	purple	Gasoline	Maserati	Model Y	Sedan	2066-06-10 22:08:11.648
PN85ECR	yellow	Electric	Maserati	El Camino	Hatchback	2041-04-26 20:21:55.31
YO81WOD	grey	Diesel	Volkswagen	Wrangler	Extended Cab Pickup	2074-10-02 19:38:50.767
SU63YYQ	orchid	Gasoline	Lamborghini	Focus	Crew Cab Pickup	1995-03-24 23:17:29.392
ZI74OCH	lavender	Gasoline	Lamborghini	El Camino	Passenger Van	2035-01-11 11:13:57.383
QT22ZQW	lavender	Gasoline	Polestar	Focus	Minivan	2063-11-03 09:41:55.778
IL46MPA	fuchsia	Hybrid	Volkswagen	Impala	Passenger Van	2043-05-31 22:33:52.279
BF40BXU	mint green	Diesel	Chevrolet	Impala	Convertible	2009-11-04 05:19:12.435
SL15ZCM	lavender	Gasoline	Smart	Mustang	Wagon	2038-11-10 03:01:35.293
WA25JMM	purple	Electric	MG	Aventador	Extended Cab Pickup	2022-04-16 00:16:40.574
AX05FGJ	magenta	Diesel	BMW	F-150	Wagon	2002-01-04 10:06:19.153
LB45ARH	blue	Electric	BMW	Jetta	Extended Cab Pickup	2034-02-01 23:39:43.637
JB97UZU	fuchsia	Gasoline	BMW	Challenger	Wagon	2024-08-03 03:24:10.237
FZ50FII	orange	Electric	Aston Martin	Grand Cherokee	Extended Cab Pickup	2061-08-17 07:36:36.812
VE01RCN	mint green	Electric	Dodge	Silverado	Crew Cab Pickup	2008-09-03 21:23:53.219
LS73ZFR	pink	Hybrid	Mitsubishi	Focus	Hatchback	2006-07-26 20:09:36.19
YV03SJE	grey	Hybrid	NIO	El Camino	Crew Cab Pickup	2046-02-15 01:33:15.663
FW99ZAX	gold	Gasoline	Chrysler	Fortwo	Cargo Van	2073-02-28 04:40:56.769
ON27LVJ	orchid	Electric	Chrysler	Altima	Convertible	2073-11-12 19:31:39.822
RL89YOU	salmon	Diesel	Land Rover	Civic	Crew Cab Pickup	2067-07-24 17:02:24.48
CP46ZQX	indigo	Gasoline	Nissan	Roadster	SUV	2042-04-03 09:20:14.979
MX31YGJ	yellow	Electric	Citroën	Camaro	Passenger Van	2035-07-27 18:14:27.824
EH20SCT	fuchsia	Gasoline	Chrysler	Fiesta	Convertible	2010-08-18 05:18:12.015
IE41RYB	green	Hybrid	Bugatti	Spyder	Sedan	2023-02-22 15:30:20.833
JH09RLW	orchid	Hybrid	Jeep	CTS	Convertible	2014-05-28 14:52:37.176
ZA03QDW	black	Electric	Chrysler	Malibu	Coupe	2017-05-17 21:21:31.03
AY27JHB	black	Diesel	Smart	Ranchero	Passenger Van	1993-07-22 01:03:02.817
DN48MGR	plum	Electric	Nissan	Model X	Crew Cab Pickup	1984-09-06 20:24:36.29
QX29VQO	sky blue	Diesel	Tesla	Wrangler	Crew Cab Pickup	1998-06-24 14:44:05.474
KP28KVR	teal	Diesel	Dodge	El Camino	SUV	2017-11-18 15:14:10.235
PM88ABD	indigo	Diesel	Chrysler	Mercielago	Coupe	2073-06-10 09:44:38.948
DN42SDQ	ivory	Electric	Peugeot	Camaro	Sedan	2044-02-11 17:34:44.955
EP99WMH	maroon	Diesel	Rivian	Beetle	Hatchback	2017-10-14 10:50:50.221
KS09MBU	salmon	Gasoline	MG	V90	Coupe	1991-02-03 04:36:30.623
BP26ISF	indigo	Gasoline	MG	Jetta	Passenger Van	2015-03-20 08:43:19.569
GM99RRS	pink	Gasoline	Tata	Charger	Passenger Van	1987-11-28 06:51:06.61
NZ99YVD	grey	Hybrid	Renault	F-150	Crew Cab Pickup	1982-02-03 08:20:19.082
SC92BBQ	fuchsia	Electric	Subaru	2	Coupe	2075-09-19 00:59:10.69
NA32OGR	cyan	Diesel	Kia	Corvette	SUV	2025-07-24 01:57:01.128
QS38MLV	magenta	Diesel	Jeep	Model Y	Crew Cab Pickup	1986-06-24 07:02:37.942
IL67PSL	turquoise	Electric	Peugeot	ATS	Extended Cab Pickup	2018-05-03 13:18:32.64
TD49NOE	azure	Gasoline	Mitsubishi	XTS	Cargo Van	2030-07-28 18:13:18.407
XZ83WAK	orange	Electric	Chevrolet	CTS	Sedan	1988-06-22 02:06:43.463
MA02BSY	plum	Electric	BYD	Fortwo	Passenger Van	2016-03-10 02:22:59.601
TT34PPH	lavender	Diesel	Land Rover	Explorer	Cargo Van	2028-12-21 20:35:05.216
HX64MIF	turquoise	Diesel	Bugatti	Explorer	Hatchback	2033-03-24 04:29:15.45
TV32ZBT	indigo	Electric	BYD	PT Cruiser	Extended Cab Pickup	2020-07-31 03:40:56.2
WQ52AOL	plum	Electric	Audi	Model Y	Cargo Van	2012-07-15 22:57:34.946
SQ56QVU	mint green	Hybrid	Jeep	Civic	Wagon	2069-02-15 21:32:44.665
WR71QEX	cyan	Hybrid	Renault	Mustang	Cargo Van	2071-04-23 07:32:57.172
HA61XAQ	blue	Hybrid	Ferrari	XC90	SUV	2064-06-23 14:17:07.067
FR44INO	magenta	Hybrid	Vauxhall	XTS	Convertible	2068-06-09 22:49:03.292
PP85NQN	pink	Diesel	Ford	ATS	SUV	2011-06-19 02:08:59.29
SI92TFV	sky blue	Hybrid	Chrysler	Altima	Extended Cab Pickup	2004-05-03 09:37:09.055
IE21QUS	sky blue	Diesel	Mercedes Benz	Model 3	Crew Cab Pickup	2022-01-16 22:12:32.419
NV75ZQM	pink	Hybrid	MG	Spyder	Hatchback	2049-11-24 01:19:17.325
CH34TCP	green	Gasoline	BMW	Model S	Coupe	2038-04-24 21:30:54.599
UF46QNH	blue	Diesel	Maserati	A8	Extended Cab Pickup	1991-03-16 18:57:23.418
TP36ZQD	salmon	Diesel	Ford	Alpine	Passenger Van	1994-09-26 20:10:32.253
MS72LSA	fuchsia	Diesel	Jaguar	A4	Coupe	1999-05-01 12:52:47.35
JV27YHE	pink	Hybrid	Fiat	Focus	Coupe	2050-09-11 04:37:19.55
LD96JRH	yellow	Diesel	Maserati	Wrangler	Crew Cab Pickup	2079-08-04 07:04:13.807
AF05JRV	red	Hybrid	Fiat	Impala	Wagon	1989-08-14 01:29:58.206
NJ43GIF	salmon	Electric	Jaguar	Wrangler	Extended Cab Pickup	2011-08-24 11:20:46.594
JS00FXM	orchid	Hybrid	Vauxhall	Model T	Convertible	2068-08-26 02:28:38.144
VX92FVD	mint green	Gasoline	Mazda	Escalade	SUV	2074-10-17 01:03:50.204
PW70UTB	lime	Hybrid	Toyota	Camaro	Hatchback	2042-07-15 03:13:31.696
UY08BMY	lavender	Diesel	Mahindra & Mahindra	Cruze	Coupe	1981-07-27 12:59:02.941
BX24SSV	silver	Diesel	Audi	Malibu	Cargo Van	2060-12-18 13:00:32.494
AM91YIZ	silver	Gasoline	Maruti	Mercielago	Passenger Van	2001-08-14 21:50:12.48
XC48FEX	olive	Gasoline	Volkswagen	CTS	Hatchback	2009-07-06 04:19:12.255
MV39PYE	fuchsia	Diesel	Land Rover	Countach	Convertible	1988-10-30 09:52:12.722
ZV19NWE	azure	Diesel	Bentley	Aventador	Cargo Van	1990-09-02 06:26:58.795
VE69YFO	white	Gasoline	Ferrari	1	Convertible	2023-02-06 09:50:32.05
UI01JBM	white	Hybrid	Aston Martin	CX-9	Convertible	2029-12-20 03:16:08.418
JH35XEA	tan	Gasoline	Mazda	Model X	Sedan	2043-07-01 14:11:13.035
UH47ELM	gold	Hybrid	Vauxhall	Cruze	Coupe	2075-10-30 04:35:59.294
OF97BLE	teal	Diesel	Fiat	Durango	Coupe	2035-05-19 19:29:37.043
SM55ZGP	red	Electric	Renault	Grand Caravan	Cargo Van	2063-05-31 23:06:15.083
AB54ICR	salmon	Hybrid	Aston Martin	Beetle	Minivan	2025-11-16 06:39:57.584
SZ21DUP	lavender	Diesel	Subaru	Jetta	Crew Cab Pickup	1988-03-22 07:53:05.561
EU00YOG	salmon	Hybrid	Mitsubishi	Alpine	Hatchback	2026-10-12 09:28:28.186
SU58JTN	plum	Diesel	Tesla	Land Cruiser	Extended Cab Pickup	2008-02-19 10:54:20.434
HQ91CNI	lavender	Hybrid	Suzuki	Escalade	Extended Cab Pickup	2048-01-03 11:44:32.908
\.


--
-- Name: vehicles vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--