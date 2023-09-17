// #include <iostream>
// using namespace std;

// int fidMax(int n, int arr[10001])
// {
//     int max = arr[0]; // Giả sử phần tử đầu tiên là giá trị lớn nhất
//     for (int i = 1; i < n; i++)
//     {
//         if (arr[i] > max)
//         {
//             max = arr[i]; // Cập nhật giá trị lớn nhất nếu tìm thấy phần tử lớn hơn
//         }
//     }
//     return max;
// }

// int main()
// {
//     int n;
//     int arr[10001];
//     int max;

//     cout << "1. Tim so nguyen lon nhat" << endl;
//     cout << "2. Tim so nguyen be nhat" << endl;

//     int choice;
//     cout << "Nhap lua chon: ";
//     cin >> choice;

//     switch (choice)
//     {
//     case 1:
//         cout << "Nhap so phan tu mang: ";
//         cin >> n;

//         cout << "Nhap " << n << " phan tu cua mang: ";
//         for (int i = 0; i < n; i++)
//         {
//             cin >> arr[i];
//         }

//         max = fidMax(n, arr);
//         cout << "So nguyen lon nhat trong mang la: " << max << endl;
//         break;

//     case 2:
//         // Xử lý lựa chọn 2 tại đây
//         break;
//     default:
//         cout << "Lua chon khong hop le." << endl;
//         break;
//     }

//     return 0;
// }