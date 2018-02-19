let usersData = [{
    "name": "John",
    "email": "john@mail.com",
    "password": "112356qwe"
}, {
    "name": "Bill",
    "email": "bill@mail.com",
    "password": "1324wqda1"
}, {
    "name": "Elis",
    "email": "elis@mail.com",
    "password": "test1245"
}, {
    "name": "Ronald",
    "email": "ronald@mail.com",
    "password": "ronaldTheKing"
}, {
    "name": "Harry",
    "email": "harry@mail.com",
    "password": "harryThePotter"
}, {
    "name": "Jim",
    "email": "jim@mail.com",
    "password": "jimCarry1245"
}, {
    "name": "Sten",
    "email": "sten@mail.com",
    "password": "londonIsACapital"
}, {
    "name": "Robert",
    "email": "rob@mail.com",
    "password": "robStark"
}, {
    "name": "Mia",
    "email": "mia@mail.com",
    "password": "mia1994"
}, {
    "name": "Ann",
    "email": "ann@mail.com",
    "password": "ann2018"
}];

let app = new Vue({
    el: '#app',
    data: {
        user: {
            name: '',
            password: ''
        },
        rememberMe: ''
    },
    methods: {
        logIn() {
            let userExist = usersData.some(item => {
                if (item.name === this.user.name && item.password === this.user.password || item.email === this.user.name && item.password === this.user.password) {
                    return true;
                } else {
                    return false;
                }
            });
            this.showAlert(userExist);
        },
        showAlert(value) {
            if (value) {
                alert(`Welcome ${this.user.name}`);
            } else {
                alert('Access denied');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidXNlcnNEYXRhIiwiYXBwIiwiVnVlIiwiZWwiLCJkYXRhIiwidXNlciIsIm5hbWUiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJtZXRob2RzIiwibG9nSW4iLCJ1c2VyRXhpc3QiLCJzb21lIiwiaXRlbSIsImVtYWlsIiwic2hvd0FsZXJ0IiwidmFsdWUiLCJhbGVydCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsWUFBWSxDQUNaO0FBQ0ksWUFBUSxNQURaO0FBRUksYUFBUyxlQUZiO0FBR0ksZ0JBQVk7QUFIaEIsQ0FEWSxFQU1aO0FBQ0ksWUFBUSxNQURaO0FBRUksYUFBUyxlQUZiO0FBR0ksZ0JBQVk7QUFIaEIsQ0FOWSxFQVdaO0FBQ0ksWUFBUSxNQURaO0FBRUksYUFBUyxlQUZiO0FBR0ksZ0JBQVk7QUFIaEIsQ0FYWSxFQWdCWjtBQUNJLFlBQVEsUUFEWjtBQUVJLGFBQVMsaUJBRmI7QUFHSSxnQkFBWTtBQUhoQixDQWhCWSxFQXFCWjtBQUNJLFlBQVEsT0FEWjtBQUVJLGFBQVMsZ0JBRmI7QUFHSSxnQkFBWTtBQUhoQixDQXJCWSxFQTBCWjtBQUNJLFlBQVEsS0FEWjtBQUVJLGFBQVMsY0FGYjtBQUdJLGdCQUFZO0FBSGhCLENBMUJZLEVBK0JaO0FBQ0ksWUFBUSxNQURaO0FBRUksYUFBUyxlQUZiO0FBR0ksZ0JBQVk7QUFIaEIsQ0EvQlksRUFvQ1o7QUFDSSxZQUFRLFFBRFo7QUFFSSxhQUFTLGNBRmI7QUFHSSxnQkFBWTtBQUhoQixDQXBDWSxFQXlDWjtBQUNJLFlBQVEsS0FEWjtBQUVJLGFBQVMsY0FGYjtBQUdJLGdCQUFZO0FBSGhCLENBekNZLEVBOENaO0FBQ0ksWUFBUSxLQURaO0FBRUksYUFBUyxjQUZiO0FBR0ksZ0JBQVk7QUFIaEIsQ0E5Q1ksQ0FBaEI7O0FBc0RBLElBQUlDLE1BQU0sSUFBSUMsR0FBSixDQUFRO0FBQ2RDLFFBQUksTUFEVTtBQUVkQyxVQUFNO0FBQ0ZDLGNBQU07QUFDRkMsa0JBQU0sRUFESjtBQUVGQyxzQkFBVTtBQUZSLFNBREo7QUFLRkMsb0JBQVk7QUFMVixLQUZRO0FBU2RDLGFBQVM7QUFDTEMsZ0JBQVE7QUFDSixnQkFBSUMsWUFBWVgsVUFBVVksSUFBVixDQUFnQkMsSUFBRCxJQUFVO0FBQ3JDLG9CQUFLQSxLQUFLUCxJQUFMLEtBQWMsS0FBS0QsSUFBTCxDQUFVQyxJQUF4QixJQUFnQ08sS0FBS04sUUFBTCxLQUFrQixLQUFLRixJQUFMLENBQVVFLFFBQTdELElBQ0lNLEtBQUtDLEtBQUwsS0FBZSxLQUFLVCxJQUFMLENBQVVDLElBQXpCLElBQWlDTyxLQUFLTixRQUFMLEtBQWtCLEtBQUtGLElBQUwsQ0FBVUUsUUFEckUsRUFDZ0Y7QUFDNUUsMkJBQU8sSUFBUDtBQUNILGlCQUhELE1BR087QUFDSCwyQkFBTyxLQUFQO0FBQ0g7QUFDSixhQVBlLENBQWhCO0FBUUEsaUJBQUtRLFNBQUwsQ0FBZUosU0FBZjtBQUNILFNBWEk7QUFZTEksa0JBQVVDLEtBQVYsRUFBaUI7QUFDYixnQkFBSUEsS0FBSixFQUFXO0FBQ1BDLHNCQUFPLFdBQVUsS0FBS1osSUFBTCxDQUFVQyxJQUFLLEVBQWhDO0FBQ0gsYUFGRCxNQUVPO0FBQ0hXLHNCQUFNLGVBQU47QUFDSDtBQUNKO0FBbEJJO0FBVEssQ0FBUixDQUFWIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdXNlcnNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkpvaG5cIixcclxuICAgICAgICBcImVtYWlsXCI6IFwiam9obkBtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCIxMTIzNTZxd2VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJCaWxsXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcImJpbGxAbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiMTMyNHdxZGExXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRWxpc1wiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJlbGlzQG1haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcInRlc3QxMjQ1XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUm9uYWxkXCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcInJvbmFsZEBtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJyb25hbGRUaGVLaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSGFycnlcIixcclxuICAgICAgICBcImVtYWlsXCI6IFwiaGFycnlAbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiaGFycnlUaGVQb3R0ZXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJKaW1cIixcclxuICAgICAgICBcImVtYWlsXCI6IFwiamltQG1haWwuY29tXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcImppbUNhcnJ5MTI0NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0ZW5cIixcclxuICAgICAgICBcImVtYWlsXCI6IFwic3RlbkBtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJsb25kb25Jc0FDYXBpdGFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUm9iZXJ0XCIsXHJcbiAgICAgICAgXCJlbWFpbFwiOiBcInJvYkBtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJyb2JTdGFya1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pYVwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJtaWFAbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwibWlhMTk5NFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFublwiLFxyXG4gICAgICAgIFwiZW1haWxcIjogXCJhbm5AbWFpbC5jb21cIixcclxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiYW5uMjAxOFwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxubGV0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgZWw6ICcjYXBwJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1lbWJlck1lOiAnJ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBsb2dJbigpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJFeGlzdCA9IHVzZXJzRGF0YS5zb21lKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0ubmFtZSA9PT0gdGhpcy51c2VyLm5hbWUgJiYgaXRlbS5wYXNzd29yZCA9PT0gdGhpcy51c2VyLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IChpdGVtLmVtYWlsID09PSB0aGlzLnVzZXIubmFtZSAmJiBpdGVtLnBhc3N3b3JkID09PSB0aGlzLnVzZXIucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsZXJ0KHVzZXJFeGlzdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93QWxlcnQodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgV2VsY29tZSAke3RoaXMudXNlci5uYW1lfWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0FjY2VzcyBkZW5pZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19
