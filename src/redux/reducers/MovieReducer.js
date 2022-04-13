import {GET_LIST_MOVIE} from '../types/typeListMovie'
const initialState = {
    arrMovie:[{
        "maPhim": 9592,
        "tenPhim": "Avengers: Age of Ultron (2022)",
        "biDanh": "avengers-age-of-ultron-2022-",
        "trailer": "https://www.youtube.com/embed/tmeOjFno6Do",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/avengers-age-of-ultron-2015-_gp00.jpg",
        "moTa": "Sau sự kiện ở Captain America 2021: The Winter Soldier c&aacute;c Avengers tập hợp c&ugrave;ng nhau để ti&ecirc;u diệt t&agrave;n dư Hydra. Nh&oacute;m thu giữ được c&acirc;y trượng của Loki với Vi&ecirc;n đ&aacute; T&acirc;m tr&iacute;, Tony t&iacute;nh d&ugrave;ng sức mạnh của vi&ecirc;n đ&aacute; để bảo vệ nền h&ograve;a b&igrave;nh Tr&aacute;i đất nhưng v&ocirc; t&igrave;nh tạo ra Ultron, một thực thể t&agrave;n &aacute;c với &yacute; định hủy diệt thế giới. Nh&oacute;m Avenger lại c&ugrave;ng nhau hợp sức bảo vệ thế giới v&agrave; đ&aacute;nh bại kẻ th&ugrave; mới n&agrave;y",
        "maNhom": "GP00",
        "ngayKhoiChieu": "2022-03-28T09:50:41.32",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
      },
       {"maPhim": 9592,
        "tenPhim": "Avengers: Age of Ultron (2022)",
        "biDanh": "avengers-age-of-ultron-2022-",
        "trailer": "https://www.youtube.com/embed/tmeOjFno6Do",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/avengers-age-of-ultron-2015-_gp00.jpg",
        "moTa": "Sau sự kiện ở Captain America 2021: The Winter Soldier c&aacute;c Avengers tập hợp c&ugrave;ng nhau để ti&ecirc;u diệt t&agrave;n dư Hydra. Nh&oacute;m thu giữ được c&acirc;y trượng của Loki với Vi&ecirc;n đ&aacute; T&acirc;m tr&iacute;, Tony t&iacute;nh d&ugrave;ng sức mạnh của vi&ecirc;n đ&aacute; để bảo vệ nền h&ograve;a b&igrave;nh Tr&aacute;i đất nhưng v&ocirc; t&igrave;nh tạo ra Ultron, một thực thể t&agrave;n &aacute;c với &yacute; định hủy diệt thế giới. Nh&oacute;m Avenger lại c&ugrave;ng nhau hợp sức bảo vệ thế giới v&agrave; đ&aacute;nh bại kẻ th&ugrave; mới n&agrave;y",
        "maNhom": "GP00",
        "ngayKhoiChieu": "2022-03-28T09:50:41.32",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
      },]
}

const MovieReducer= (state = initialState,action) => {
  switch (action.type) {
    case GET_LIST_MOVIE:
     
      return {...state,arrMovie: action.data}


 

  default:
    return state
  }
}
export default MovieReducer
