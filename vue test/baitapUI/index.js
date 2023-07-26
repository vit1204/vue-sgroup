const { createApp } = Vue;

      const app = createApp({
        data() {
          return {
            searchText: "",
            editUser: true,
            
            tableColumns: [
              "user",
              "role",
              "status",
              "last activity",
              "join date",
              "actions",
            ],
            userData: [
              {
                id: "1",
                name: "John Doe",
                email: "johnDoe@gmail.com",
                avatar: "https://i.pravatar.cc/300",
                role: "admin",
                status: "active",
                lastActivity: "1 min ago",
                joinDate: "2023-06-16T02:56:02.677Z",
                popup: "hidden",
              },
              {
                id: "2",
                name: "John User",
                email: "johnDoe@gmail.com",
                avatar: "https://i.pravatar.cc/300",
                role: "user",
                status: "suspended",
                lastActivity: "1 min ago",
                joinDate: "2023-06-16T02:56:02.677Z",
                popup: "hidden",
              },
              {
                id: "3",
                name: "John Admin",
                email: "johnDoe@gmail.com",
                avatar: "https://i.pravatar.cc/300",
                role: "admin",
                status: "active",
                lastActivity: "1 min ago",
                joinDate: "2023-06-16T02:56:02.677Z",
                popup: "hidden",
              },
            ],
          };
        },
        methods: {
      
            showPopup(id) {
            this.userData = this.userData.map((user) => {
              if (user.id === id) {
                if ((user.popup = "hidden")) user.popup = "block";
              } else {
                user.popup = "hidden";
              }
              return user;
            });
          },
          onDelete(id) {
            this.userData = this.userData.filter((u) => u.id !== id);
          },
          showEdit() {
            this.editUser = true;
            const edit = document.querySelector(".edit");
            edit.classList.remove("hidden");
            
          },
           clickOutSide() {

            console.log("hehe");
            this.userData.forEach((user) => (user.popup = "hidden"));
            

          },
        },
        computed: {
          filterUsers() {
            if (!this.searchText) {
              return this.userData;
            }
            return this.userData.filter((u) => {
              for (key in u) {
                if (!u[key] || key === "popup") continue;
                if (u[key].toLowerCase().includes(this.searchText)) {
                  return u;
                }
              }
            });
          },
        },
      }).mount("#app");