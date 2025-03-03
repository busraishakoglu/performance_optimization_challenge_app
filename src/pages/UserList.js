import React,{memo} from "react";
import { FixedSizeList as List } from "react-window";

  const UserList = memo(({ users }) => {
    
    const Item = ({ index, style }) => (
      <div style={{ ...style, padding: "10px", borderBottom: "1px solid #eee" }}>
        {users[index].name}
      </div>
    );

   return (
      <List
      height={300}           // List container yüksekliği (px)
      itemCount={users.length} // Toplam öğe sayısı
      itemSize={50}          // Her bir öğenin yüksekliği (px)
      width={300}            // Liste genişliği (px)
      className="virtual-list"
    >
      {Item}
    </List>
  );
});

export default UserList;
