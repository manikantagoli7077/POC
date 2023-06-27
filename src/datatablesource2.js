export const userColumns = [
    { field: "id", headerName: "Emp ID", width: 70 },
    {
      field: "EName",
      headerName: "Employee Name",
      width: 230,
    },
    {
      field: "EmailId",
      headerName: "Email ID",
      width: 230,
    },
  
    {
      field: "EBandLatest",
      headerName: "BandLatest",
      width: 100,
    },
    {
        field: "EJoiningDateSopraSteria",
        headerName: "JoiningDate",
        width: 100,
    },
    {
        field: "EJoiningDateTescoAccount",
        headerName: "Tesco JoiningDate",
        width: 100,
    },
    {
        field: "EEngagement",
        headerName: "Engagement",
        width: 100,
    },
    {
        field: "ETeam",
        headerName: "Team Name",
        width: 100,
    },
    {
        field: "ELineManager",
        headerName: "Line Manager",
        width: 100,
    },
    {
        field: "OfficeLocation",
        headerName: "Base Location",
        width: 100,
    },
    {
        field: "Gender",
        headerName: "Gender",
        width: 100,
    },
    {
        field: "OTLCode",
        headerName: "OTL Code",
        width: 100,
    },
    {
        field: "SSGExperience",
        headerName: "SSG Exp",
        width: 100,
    },
    {
        field: "TescoExperience",
        headerName: "Tesco Exp",
        width: 100,
    },
    {
        field: "YearsInTesco",
        headerName: "Years In Tesco",
        width: 100,
    },
    {
        field: "EContactNumber",
        headerName: "Contact Number",
        width: 100,
    },
    {
        field: "Role1",
        headerName: "Role",
        width: 100,
    },

    {
      field: "Status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.Status}`}>
            {params.row.Status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      "id": 153,
      "EName": "rajram",
      "EmailId": "ravi@soprasteria.com",
      "EBandLatest": "band",
      "EJoiningDateSopraSteria": 44052.22928240741,
      "EJoiningDateTescoAccount": 44052.22928240741,
      "EEngagement": "engage",
      "ETeam": "merchandise",
      "ELineManager": "shiva",
      "OfficeLocation": "phiphines",
      "Gender": "male",
      "OTLCode": 7655,
      "SSGExperience": 2,
      "TescoExperience": 1,
      "YearsInTesco": 1,
      "EContactNumber": 90989908,
      "Role1": "manager",
      "Status": "active"
    },
    {
      "id": 155,
      "EName": "vital",
      "EmailId": "vital@soprasteria.com",
      "EBandLatest": "ba",
      "EJoiningDateSopraSteria": 44813.22928240741,
      "EJoiningDateTescoAccount": 44813.22928240741,
      "EEngagement": "en",
      "ETeam": "t",
      "ELineManager": "ram",
      "OfficeLocation": "ch",
      "Gender": "female",
      "OTLCode": 9393,
      "SSGExperience": 1,
      "TescoExperience": 1,
      "YearsInTesco": 0,
      "EContactNumber": 222882,
      "Role1": "e",
      "Status": "active"
    },
    {
      "id": 156,
      "EName": "suraj",
      "EmailId": "suraj@soprasteria.com",
      "EBandLatest": "ba",
      "EJoiningDateSopraSteria": 44813.22928240741,
      "EJoiningDateTescoAccount": 44813.22928240741,
      "EEngagement": "en",
      "ETeam": "t",
      "ELineManager": "ram",
      "OfficeLocation": "c",
      "Gender": "female",
      "OTLCode": 39393,
      "SSGExperience": 1,
      "TescoExperience": 1,
      "YearsInTesco": 0,
      "EContactNumber": 282,
      "Role1": "e",
      "Status": "active"
    },
    {
      "id": 152,
      "EName": "shiva",
      "EmailId": "shiva@soprasteria.com",
      "EBandLatest": "band",
      "EJoiningDateSopraSteria": 44813.22928240741,
      "EJoiningDateTescoAccount": 44813.22928240741,
      "EEngagement": "engage",
      "ETeam": "finance",
      "ELineManager": "ram",
      "OfficeLocation": "chennai",
      "Gender": "male",
      "OTLCode": 7657,
      "SSGExperience": 3,
      "TescoExperience": 1,
      "YearsInTesco": 1,
      "EContactNumber": 988899,
      "Role1": "manager",
      "Status": "active"
    },
    {
      "id": 154,
      "EName": "rajuramu",
      "EmailId": "raju@soprasteria.com",
      "EBandLatest": "band",
      "EJoiningDateSopraSteria": 44052.22928240741,
      "EJoiningDateTescoAccount": 44052.22928240741,
      "EEngagement": "en",
      "ETeam": "merchandise",
      "ELineManager": "shiva",
      "OfficeLocation": "phiphines",
      "Gender": "female",
      "OTLCode": 3939,
      "SSGExperience": 1,
      "TescoExperience": 1,
      "YearsInTesco": 0,
      "EContactNumber": 8999,
      "Role1": "manager",
      "Status": "active"
    },
    {
      "id": 202,
      "EName": "viratk",
      "EmailId": "virat@soprasteria.com",
      "EBandLatest": "ba",
      "EJoiningDateSopraSteria": 44813.22928240741,
      "EJoiningDateTescoAccount": 44813.22928240741,
      "EEngagement": "en",
      "ETeam": "t",
      "ELineManager": "ram",
      "OfficeLocation": "c",
      "Gender": "female",
      "OTLCode": 888,
      "SSGExperience": 1,
      "TescoExperience": 1,
      "YearsInTesco": 0,
      "EContactNumber": 290293,
      "Role1": "e",
      "Status": "active"
    }
  ];
  