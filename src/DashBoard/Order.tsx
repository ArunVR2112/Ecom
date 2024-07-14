// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../ReduxApi/rootReducers";
// import { fetchUser } from "../ReduxApi/userActions"; // Adjust path as needed

// const Order: React.FC = () => {
//     const dispatch = useDispatch();
//     const { users, error } = useSelector((state: RootState) => state.user);

//     useEffect(() => {
//         dispatch(fetchUser());
//     }, [dispatch]);

//     return (
//         <div className="flex">
//             <div className="flex flex-wrap">
//                 {error && <p>Error: {error}</p>}
//                 <h2>User List</h2>
//                 <ul>
//                     {users.map((user) => (
//                         <li key={user.id}>{user.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Order;
