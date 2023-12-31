// MOCK DATA
//need to set up API request to /nmpsiaapi/DistrictContact/LoadDistrictContacts or wherever that endpoint is getting the contact list

const employers = [
  {
    school: "ACADEMY FOR TECHNOLOGY AND THE CLASSICS",
    distID: 309,
    contacts: [
      {
        name: "JASON MORGAN",
        role: ["MAIN"],
        physAddress: "74 A VAN NU PO RD. SANTA FE, NM 87508",
        mailAddress: "74 A VAN NU PO R.D SANTA FE, NM 87508",
        phone: "(505)473-4282 EXT. 223",
        fax: "000-000-0000",
        email: "JASON.MORGAN@ATCSCHOOL.ORG",
      },
      {
        name: "CHRISTINE GARCIA",
        role: ["BILLING1", "BENEFITS1", "LOA1", "RISK1"],
        physAddress: "74 A VAN NU PO RD. SANTA FE, NM 87508",
        mailAddress: "74 A VAN NU PO R.D SANTA FE, NM 87508",
        phone: "(505)438-4056",
        fax: "000-000-0000",
        email: "CHRISTINE.GARCIA@ATCSCHOOL.ORG",
      },
    ],
  },
  {
    school: "ACE LEADERSHIP HIGH SCHOOL",
    distID: 393,
    contacts: [
      {
        name: "CARLA GROSSETETE",
        role: ["MAIN", "BENEFITS1", "LOA1"],
        physAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        mailAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        phone: "(505)242-4733",
        fax: "(505)242-0222",
        email: "CARLA@ACELEADERSHIP.ORG",
      },
      {
        name: "ANGIE LERNER",
        role: ["BILLING1"],
        physAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        mailAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        phone: "(505)242-4733",
        fax: "(505)242-0222",
        email: "ANGIE@K12ACCOUNTING.COM",
      },
      {
        name: "RALPH GONZALES",
        role: ["RISK1"],
        physAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        mailAddress: "1240 BELLAMAH AVE NW ALBUQUERQUE, NM 87104",
        phone: "(505)242-4733",
        fax: "(505)242-0222",
        email: "RGONZO@ACELEADERSHIP.ORG",
      },
    ],
  },
  {
    school: "ACES TECHNICAL CHARTER SCHOOL",
    distID: 444,
    contacts: [
      {
        name: "JERON CAMPBELL",
        role: ["MAIN", "BILLING1", "BENEFITS1", "LOA1", "RISK1"],
        physAddress: "4501 MONTGOMERY BLVD NE STE C1 ALBUQUERQUE, NM 87109",
        mailAddress: "4501 MONTGOMERY BLVD NE ALBUQUERQUE, NM 87109",
        phone: "(505)506-1186",
        fax: "(000)000-0000",
        email: "JERON@ACESPUBLICSCHOOLS.ORG",
      },
    ],
  },
  {
    school: "AFT NEW MEXICO",
    distID: 97,
    contacts: [
      {
        name: "WHITNEY HOLLAND",
        role: ["MAIN"],
        physAddress: "530 JEFFERSON ST NE ALBUQUERQUE, NM 87108",
        mailAddress: "530 JEFFERSON ST NE ALBUQUERQUE, NM 88311",
        phone: "(505)266-6638",
        fax: "(505)266-1967",
        email: "WHITNEY@NMAFT.ORG",
      },
      {
        name: "MELISSA FLORES",
        role: ["BILLING1", "BENEFITS1", "LOA1", "RISK1"],
        physAddress: "530 JEFFERSON ST NE ALBUQUERQUE, NM 87108",
        mailAddress: "530 JEFFERSON ST NE ALBUQUERQUE, NM 88311",
        phone: "(505)266-6638",
        fax: "(505)266-1967",
        email: "MELISSA@NMAFT.ORG",
      },
    ],
  },
  {
    school: "ALAMOGORDO PUBLIC SCHOOLS",
    distID: 46,
    contacts: [
      {
        name: "PAMELA RENTERIA",
        role: ["MAIN"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6002",
        fax: "(575)812-6012",
        email: "PAMELA.RENTERIA@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "TABIA KUBOS",
        role: ["BILLING1", "BENEFITS1", "LOA1", "WC1"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6057",
        fax: "(575)812-6049",
        email: "TABIA.KUBOS@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "COLLEEN TAGLE",
        role: ["BILLING2", "BENEFITS3", "WC3"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6043",
        fax: "(575)812-6049",
        email: "COLLEEN.TAGLE@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "JOLENE JARAMILLO",
        role: ["BILLING3"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)429-1080",
        fax: "(575)812-6049",
        email: "JOLENE@K12ACCOUNTING.COM",
      },
      {
        name: "SHARON GIBSON",
        role: ["BILLING4"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6064",
        fax: "(575)812-6049",
        email: "SHARON.GIBSON@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "JASON ROWE",
        role: ["BILLING5", "BENEFITS4"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6045",
        fax: "(575)812-6049",
        email: "JASON.ROWE@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "KATHLEEN VANNESS",
        role: ["BENEFITS2"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6061",
        fax: "(575)812-6049",
        email: "KATHLEEN.VANNESS@ALAMOGORDOSCHOOLS.ORG",
      },
      {
        name: "MARIE BOUMA",
        role: ["RISK1"],
        physAddress: "1211 HAWAII AVE ALAMOGORDO, NM 88310",
        mailAddress: "P.O. BOX 650 ALAMOGORDO, NM 88311",
        phone: "(575)812-6057",
        fax: "(575)812-6049",
        email: "MARIE.BOUMA@ALAMOGORDOSCHOOLS.ORG",
      },
    ],
  },
];

export default employers;
