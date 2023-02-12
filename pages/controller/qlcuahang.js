var qlcuahang = function ($scope) {
    // Thuoc tinh luu trang thai hien thi cua form
    $scope.isShowForm = false;
    // Phuong thuc de chuyen trang thai hien thi form
    $scope.setShowForm = function (status) {
        $scope.isShowForm = status;
    };
    $scope.danhsach = [
        {
            id: 1, name: 'Van Thi Sau', diachi: 'Nghe An',
            sdt: '0379750782',
            logo: "https://img.thuthuat123.com/uploads/2019/07/15/50-hinh-anh-hoa-hong-dep-va-lang-man-nhat_105817540.jpg",
            trangthai: "1"
        },
        {
            id: 2, name: 'Nguyen Van Nam', diachi: 'Ha Noi',
            sdt: '03354647588',
            logo: "https://img.thuthuat123.com/uploads/2019/07/15/50-hinh-anh-hoa-hong-dep-va-lang-man-nhat_105817540.jpg",
            trangthai: "0"
        },

    ];
    // Quan ly input
    $scope.input = {
        name: "Van Thi Sau",
        diachi : "",
        sdt : "",
        logo : "",
        trangthai : "",
    };
    $scope.onClose = function () {
        $scope.input = {
            name: "",
            diachi : "",
            sdt : "",
            logo : "",
            trangthai : "",
        };
        $scope.isShowForm = false;
        $scope.editId = 0;
    };
    $scope.onSave = function () {
        var editId = $scope.editId;
        // Kiểm tra isEdit xem là sửa hay thêm
        if (editId) {
            for (i = 0; i < $scope.danhsach.length; i++) {
                if ($scope.danhsach[i].id == editId) {
                    $scope.danhsach[i].name = $scope.input.name;
                    $scope.danhsach[i].diachi = $scope.input.diachi;
                    $scope.danhsach[i].sdt = $scope.input.sdt;
                    $scope.danhsach[i].logo = $scope.input.logo;
                    $scope.danhsach[i].trangthai = $scope.input.trangthai;
                }
            }
            $scope.onClose();
            return;
        }
        var ds = $scope.danhsach;
        var newId = ds.length > 0
            ? ds[ds.length - 1].id + 1
            : 1;
        var newItem = {
            ...$scope.input,
            id: newId
        };
        $scope.danhsach.push(newItem);
        $scope.onClose();
    };
    $scope.onDelete = function (deleteId) {
        var confirm = window.confirm('Ban co muon xoa khong?');
        if (confirm) {
            $scope.danhsach = $scope.danhsach.filter(function (item) {
                return item.id !== deleteId;
            })
        }
    };

    $scope.editId = 0;
    $scope.onEdit = function (editId) {
        $scope.editId = editId;
        $scope.isShowForm = true;
        // 1. Tìm kiếm phần tử theo id
        var editItem = $scope.danhsach
            .find(function (item) {
                return item.id == editId;
            });
        // 2. Hiển thị thông tin cần sửa lên form
        $scope.input = {
            name: editItem.name,
            diachi: editItem.diachi,
            sdt: editItem.sdt,
            logo: editItem.logo,
            trangthai: editItem.trangthai,
        };
    };
};