//2/2/2023 comment


// import React, { useState } from "react";
// import { Box, Button, Chip, Grid } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import Swal from "sweetalert2";
// import { useDispatch, useSelector } from "react-redux";
// import { TableComponent } from "../../components/TableComponent";
// import { useNavigate } from "react-router-dom";
// import {
//   deleteAdvertisement,
//   getAdvertisement,
// } from "../../redux/advertisementApiCalls";
// import LinearProgress from "@mui/material/LinearProgress";
// import { removeAdvertisement } from "../../redux/advertisementRedux";

// export const AdvertisementListImpl = () => {
//   const [loading, setLoading] = useState(true);
//   const [trigger, setTrigger] = useState("s");
//   const [deleteTrigger, setDeleteTrigger] = useState("s");
//   const token = useSelector((state) => state.user.token);
//   const advertisements = useSelector(
//     (state) => state.advertisement.advertisements
//   );
//   const permissionsData = useSelector(
//     (state) => state.permissionData.permissionsData
//   );
//   //   const [deleteTrigger, setDeleteTrigger] = React.useState("");
//   const [rows, setRows] = React.useState([]);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     const getDataFromDB = async () => {
//       dispatch(removeAdvertisement());
//       const result = await getAdvertisement(dispatch, token);
//       if (result) {
//         console.log("Get advertisement data success");
//         setTrigger(trigger + "s");
//         setLoading(false);
//       } else {
//         console.log("Get advertisement data unsuccess");
//       }
//     };
//     getDataFromDB();
//   }, [loading, deleteTrigger]);

//   React.useEffect(() => {
//     const getNormalUserData = async () => {
//       let rowData = [];
//       advertisements.map(
//         (item) => {
//           // if (item.status) {
//           rowData.push({
//             id: item.advertisement_id,
//             col1: item.image_url,
//             col2: item.url,
//             col3: item.description,
//           });
//         }
//         // }
//       );
//       setRows(rowData);
//     };
//     getNormalUserData();
//   }, [trigger, dispatch, advertisements, deleteTrigger]);

//   const deleteItem = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#378cbb",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const status = await deleteAdvertisement(id, dispatch, token);
//         if (status) {
//           setDeleteTrigger(deleteTrigger + "z");
//           Swal.fire("Deleted!", "Your event has been deleted.", "success");
//         } else {
//           Swal.fire(
//             "Can't Delete!",
//             "Your event has not been deleted.",
//             "error"
//           );
//         }
//       }
//     });
//   };

//   const updateItem = (id) => {
//     console.log(id);
//     navigate(`/updateAdvertisement/${id}`);
//   };

//   const changeItem = (id) => {
//     console.log(id);
//     //API call
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#378cbb",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Change it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         alert(id);
//         Swal.fire("Change!", "User activation changed.", "success");
//       }
//     });
//   };

//   const columns = [
//     { field: "id", headerName: "Advertisement Id", width: 180 },
//     {
//       field: "col1",
//       headerName: "Advertisement Image",
//       width: 220,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.col1} alt="" />
//             {/* {params.row.col1} */}
//           </div>
//         );
//       },
//     },
//     { field: "col3", headerName: "Description", width: 180 },
//     { field: "col2", headerName: "URL", width: 180 },

//     // {
//     //   field: "col9",
//     //   headerName: "Event Status",
//     //   width: 150,
//     //   renderCell: (params) => {
//     //     return (
//     //       <>
//     //         {/* params.row.isCancel */}
//     //         <Stack direction="row" alignItems="center" spacing={1}>
//     //           {params.row.col9 ? (
//     //             <IconButton
//     //               aria-label="edit"
//     //               size="large"
//     //               color="success"
//     //               onClick={() => changeItem(params.row.id)}
//     //             >
//     //               <CheckIcon />
//     //             </IconButton>
//     //           ) : (
//     //             <IconButton
//     //               aria-label="delete"
//     //               size="large"
//     //               color="error"
//     //               onClick={() => changeItem(params.row.id)}
//     //             >
//     //               <ClearIcon />
//     //             </IconButton>
//     //           )}
//     //         </Stack>
//     //       </>
//     //     );
//     //   },
//     // },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <>
//             {/* params.row.isCancel */}
//             <Stack direction="row" alignItems="center" spacing={1}>
//               {permissionsData.update_advertisement ? (
//                 <IconButton
//                   aria-label="edit"
//                   size="large"
//                   color="success"
//                   onClick={() => updateItem(params.row.id)}
//                 >
//                   <EditIcon />
//                 </IconButton>
//               ) : (
//                 <></>
//               )}

//               {permissionsData.delete_advertisement ? (
//                 <IconButton
//                   aria-label="delete"
//                   size="large"
//                   color="error"
//                   onClick={() => deleteItem(params.row.id)}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               ) : (
//                 <></>
//               )}
//             </Stack>
//           </>
//         );
//       },
//     },
//   ];
//   return (
//     <Box
//       sx={{
//         height: 400,
//         width: "100%",
//         bgcolor: "#FFF",
//       }}
//     >
//       {loading ? (
//         <Box sx={{ width: "100%" }}>
//           <LinearProgress />
//         </Box>
//       ) : (
//         <div>
//           <Grid
//             container
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <div>
//               <h2>Advertisements</h2>
//             </div>
//             <div>
//               {permissionsData.create_advertisement ? (
//                 <Button
//                   variant="contained"
//                   href="/createAdvertisement"
//                   // color="secondary"
//                   endIcon={<AddIcon />}
//                 >
//                   Create
//                 </Button>
//               ) : (
//                 <></>
//               )}
//             </div>

//             {/* <Button variant="contained">Contained1</Button> */}
//           </Grid>
//           <div style={{ marginTop: "20px" }}>
//             <TableComponent rows={rows} columns={columns} />
//           </div>{" "}
//         </div>
//       )}
//     </Box>
//   );
// };
