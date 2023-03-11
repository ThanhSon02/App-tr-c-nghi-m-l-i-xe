import { image } from "./assets/img";

const data = [
    {
        id: 0,
        qs: "Bạn đang lái xe phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        image: undefined,
        options: [
            "Không được vượt",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn.",
        ],
        correctAns:
            "Được vượt khi đảm bảo an toàn.",
    },
    {
        id: 1,
        qs: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
        image: undefined,
        options: [
            "Được mang, vác tùy trường hợp cụ thể.",
            "Không được mang, vác.",
            "Được mang, vác nhưng phải đảm bảo an toàn.",
            "Được mang, vác tùy theo sức khỏe của bản thân.",
        ],
        correctAns:
            "Không được mang, vác.",
    },
    {
        id: 2,
        qs: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
        image: undefined,
        options: [
            "Được sử dụng.",
            "Chỉ người ngồi sau được sử dụng.",
            "Không được sử dụng.",
            "Được sử dụng nếu không có áo mưa.",
        ],
        correctAns:
            "Không được sử dụng.",
    },
    {
        id: 3,
        qs: "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
        image: undefined,
        options: [
            "Xe mô tô 2 bánh có dung tích xi lanh từ 50 cm3 trở lên.",
            "Xe gắn máy có dung tích xi lanh dưới 50 cm3.",
            "Xe ô tô tải dưới 3,5 tấn; xe chở người đến 9 chỗ ngồi.",
            "Tất cả các ý nêu trên.",
        ],
        correctAns:
            "Xe gắn máy có dung tích xi lanh dưới 50 cm3.",
    },
    {
        id: 4,
        qs: "Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
        image: undefined,
        options: [
            "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
            "Không được phép.",
            "Chỉ được thực hiện trên đường thật vắng.",
            "Chỉ được phép khi người đi xe đạp đã quá mệt.",
        ],
        correctAns:
            "Không được phép.",
    },
    {
        id: 5,
        qs: "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
        image: image.img1,
        options: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn."
        ],
        correctAns:
            "Biển báo cấm.",
    },
    {
        id: 6,
        qs: "Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen là loại biển gì dưới đây?",
        image: image.img2,
        options: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn."
        ],
        correctAns:
            "Biển báo nguy hiểm.",
    },
    {
        id: 7,
        qs: "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
        image: image.img3,
        options: [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo chỉ dẫn."
        ],
        correctAns:
            "Biển báo chỉ dẫn.",
    },
    {
        id: 8,
        qs: "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        image: image.img4,
        options: [
            "Người tham gia giao thông ở các hướng phải dừng lại.",
            "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
        ],
        correctAns:
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
    },
    {
        id: 9,
        qs: "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        image: image.img5,
        options: [
            "Người tham gia giao thông ở hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại.",
            "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông.",
            "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe ở trong khu vực giao nhau.",
            "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn."
        ],
        correctAns:
            "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe ở trong khu vực giao nhau.",
    },
    {
        id: 10,
        qs: "Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
        image: image.img6,
        options: [
            "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
            "Không được phép.",
            "Chỉ được thực hiện trên đường thật vắng.",
            "Chỉ được phép khi người đi xe đạp đã quá mệt.",
        ],
        correctAns:
            "Không được phép.",
    },
    {
        id: 11,
        qs: "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        image: undefined,
        options: [
            "Gặp biển báo nguy hiểm trên đường.",
            "Gặp biển chỉ dẫn trên đường.",
            "Gặp biển báo hết mọi lệnh cấm.",
            "Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
        ],
        correctAns:
            "Gặp biển báo nguy hiểm trên đường.",
    },
    {
        id: 12,
        qs: "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
        image: undefined,
        options: [
            "Để làm đẹp.",
            "Để tránh mưa nắng.",
            "Để giảm thiểu chấn thương vùng đầu.",
            "Để các loại phương tiện khác dễ quan sát."
        ],
        correctAns:
            "Để giảm thiểu chấn thương vùng đầu.",
    },
    {
        id: 13,
        qs: "Theo Luật Giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
        image: undefined,
        options: [
            "Đỏ – Vàng – Xanh.",
            "Cam – Vàng – Xanh.",
            "Vàng – Xanh dương – Xanh lá.",
            "Đỏ – Cam – Xanh."
        ],
        correctAns:
            "Đỏ – Vàng – Xanh.",
    },
    {
        id: 14,
        qs: "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
        image: undefined,
        options: [
            "Đường ướt, đường có sỏi cát trên nền đường.",
            "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
            "Đường đèo dốc, vòng liên tục.",
            "Tất cả các ý nêu trên.",
        ],
        correctAns:
            "Tất cả các ý nêu trên.",
    },
    {
        id: 15,
        qs: "Trên đường đang xảy ra ùn tắc có những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
        image: undefined,
        options: [
            "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
            "Đi lên vỉa hè, tận dùng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Lấn sàng trái đường cố gắng vượt lên xe khác.",
            "Tất cả các ý nêu trên."
        ],
        correctAns:
            "Tất cả các ý nêu trên.",
    },
    {
        id: 16,
        qs: "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
        image: undefined,
        options: [
            "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
            "Trong khi tránh nhau không nơi đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
            "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
            "Cả ý 1 và ý 2.",
        ],
        correctAns:
            "Cả ý 1 và ý 2.",
    },
    {
        id: 17,
        qs: "Khi điều khiển xe mô tô quay đầu người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
        image: undefined,
        options: [
            "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
            "Chỉ quay đầu xe ở những nơi được phép quay đầu.",
            "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
            "Tất cả các ý nêu trên.",
        ],
        correctAns:
            "Tất cả các ý nêu trên.",
    },
    {
        id: 18,
        qs: "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
        image: undefined,
        options: [
            "Để điều khiển xe chạy về phía trước.",
            "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
            "Để điều khiển xe chạy lùi.",
            "Cả ý 1 và ý 2.",
        ],
        correctAns:
            "Cả ý 1 và ý 2.",
    },
    {
        id: 19,
        qs: "Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
        image: undefined,
        options: [
            "Tăng ga thật nhanh, giảm ga từ từ.",
            "Tăng ga thật nhanh, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga từ từ.",
        ],
        correctAns:
            "Tăng ga từ từ, giảm ga thật nhanh.",
    },
    {
        id: 20,
        qs: "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
        image: image.img7,
        options: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        correctAns:
            "Biển 1 và 2.",
    },
    {
        id: 22,
        qs: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
        image: image.img8,
        options: [
            "Không biển nào.",
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        correctAns:
        "Biển 2 và 3.",
    },
    {
        id: 21,
        qs: "Gặp biển nào xe xích lô được phép đi vào?",
        image: image.img9,
        options: [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và biển 2.",
        ],
        correctAns:
            "Biển 1 và biển 2.",
    },
    {
        id: 23,
        qs: "Biển nào cấm quay đầu xe?",
        image: image.img10,
        options: [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào.",
            "Cả hai biển.",
        ],
        correctAns:
            "Biển 2.",
    },
    {
        id: 24,
        qs: "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
        image: image.img11,
        options: [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        correctAns:
            "Biển 1 và 2.",
    },    
];

export default data;
