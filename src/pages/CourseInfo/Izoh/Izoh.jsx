import React, { useEffect, useRef, useState } from "react";
import {
  Btn,
  ChatBox,
  ChatContainer,
  ChatText,
  Container,
  DisFlex,
  InnerPaginationWrap,
  InputContainer,
  JustDiv,
  NameReply,
  PaginationInput,
  PaginationInputWrap,
  PaginationTextButton,
  PaginationWrapper,
  RepliedTitle,
  RepliedView,
  ReplyImg,
  ReplyText,
  Thatpersonname,
  Thatpersonpost,
} from "./style";
import { CopyOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ChatData } from "./chat";
import Me from "../../../assets/images/lesson/opoy.png";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useAxios from "../../../api/useAxios";
import { useParams } from "react-router-dom";
import { BaseURLMedia } from "../../../Base/Url";
import ReplyIcon from "@mui/icons-material/Reply";
import ChatIcon from '@mui/icons-material/Chat';
import { Pagination } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  // "@keyframes ripple": {
  //   "0%": {
  //     transform: "scale(.8)",
  //     opacity: 1,
  //   },
  //   "100%": {
  //     transform: "scale(2.4)",
  //     opacity: 0,
  //   },
  // },
}));

const Izoh = () => {
  const [chatinp, setchatinp] = useState("");
  const [render, setrender] = useState(false);
  const api = useAxios();
  const { course_id } = useParams();
  console.log("iddddddddddd",course_id);
  const [Comments, setComments] = useState([]);
  const ID =
    localStorage.getItem("user1") !== null
      ? JSON.parse(localStorage.getItem("user1"))
      : 0;
  const [replying, setreplying] = useState(-1);
  const inputREF = useRef();
  const [placeHolder, setplaceHolder] = useState("Izoh qoldirish");
  const [page, setpage] = useState(
    localStorage.getItem('is_page') !==null ? localStorage.getItem('is_page') : 1
  );
  const [pages_count, setpages_count] = useState(3);
  const [Govalue, setGovalue] = useState("");

  const GetComments = async () => {
    try {
      const res = await api.get(`/course/comments/${course_id}/`, {
        params: { page: page },
      });
      if (res.data.success) {
        console.log(res);
        setComments(res.data.data?.result);
        setpages_count(res.data.data?.pagination?.pages_count);
      }
    } catch (err) {}
  };

  useEffect(() => {
    GetComments();
  }, [render, setrender, page, setpage]);

  const ReplyToUser = (item) => {
    if (item.id === replying) {
      setreplying(-1);
      setplaceHolder("Izoh qoldirish");
    } else {
      setreplying(item.id);
      inputREF.current.focus();
      setplaceHolder("Replying to " + ( item.teacher === null ? item.student?.full_name : item.teacher?.full_name));
    }
  };

  const PostComment = () => {
    let formData = new FormData();
    formData.append("comment", chatinp);

    if (replying !== -1) {
      formData.append("parent", replying);
      
    }

    api
      .post(`/course/comments/${course_id}/`, formData)
      .then((res) => {
        console.log("post",res)
        if (res.data.success) {
          setchatinp("");
          setrender(!render);
          setreplying(-1);
          setplaceHolder("Izoh qoldirish");

          // console.log(res);
        }
      })
      .catch((res) => {
        // console.log(res);
      });
  };


  const HandleChange = (e) => {
    console.log("e", e);
    if(e.target.textContent==''){
      setpage(page*1+1)
      localStorage.setItem('is_page',page)
    }else{
      setpage(e.target.textContent);
      localStorage.setItem('is_page',e.target.textContent)
    }
  };



  return (
    <React.Fragment>
      <Container>
        <InputContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width:'100%'
            }}
          >
            <input
              style={{
                width: "calc(100% - 100px)",
                height: "54px",
                borderRadius: "15px 0px 0px 15px",
                outline:'none',
                border:'1px solid #909090',
                paddingLeft:7,
                boxSizing:'border-box'
              }}
              ref={inputREF}
              value={chatinp}
              onChange={(e) => setchatinp(e.target.value)}
              placeholder={placeHolder}
            />
            <Tooltip title="Send it now">
              <Btn
                onClick={PostComment}
                icon={<SendRoundedIcon style={{ color: "white" }} />}
              />
            </Tooltip>
          </div>
        </InputContainer>
        <ChatContainer>
          {Comments?.map((item, index) => (
            <ChatBox key={index} ismine={( item.teacher === null ? item.student?.id : item.teacher?.id)=== ID?.id}>
              <Stack direction="row" spacing={2}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    style={{ width: 55, height: 55, outline: "2px solid aqua" }}
                    src={BaseURLMedia +( item.teacher === null ? item.student?.image : item.teacher?.image)}
                    alt={( item.teacher === null ? item.student?.full_name : item.teacher?.full_name)}
                  />
                </StyledBadge>
              </Stack>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <NameReply>
                  <span style={{display:'flex',alignItems:'center'}}>
                    {( item.teacher === null ? null : <StarIcon style={{color:'orange',margin:5}} />)}
                    {( item.teacher === null ? item.student?.full_name : item.teacher?.full_name)}
                  </span>
                  <ReplyText onClick={() => ReplyToUser(item)}>
                    {replying === item.id ? "Replying..." : "Reply"}{" "}
                    <ReplyIcon style={{ color: "#2b80ff" ,fontSize:18}} />{" "}
                  </ReplyText>
                </NameReply>
                <ChatText ismine={item.ismine}>
                  {item.parent !== null ? (
                    <RepliedView>
                      <RepliedTitle>
                        <DisFlex>
                           <ReplyImg src={BaseURLMedia+ ( item.parent?.student === null ? item.parent?.teacher?.image :item.parent?.student?.image) } alt="" />
                           <JustDiv>
                              <Thatpersonname>{  ( item.parent?.student === null ? item.parent?.teacher?.full_name :item.parent?.student?.full_name) }</Thatpersonname>
                              <Thatpersonpost>{item.parent?.comment}
                              </Thatpersonpost>
                           </JustDiv>
                        </DisFlex> 
                        <div style={{ color: "black" ,fontStyle:'italic'}}> 
                             <span style={{fontStyle:'normal'}}>Izoh: </span>  {item.comment}
                        </div>
                      </RepliedTitle>
                    </RepliedView>
                  ) : (
                    <div><span style={{fontStyle:'normal'}}>Izoh: </span> {item.comment} </div> 
                  )}
                </ChatText>
              </div>
            </ChatBox>
          ))}
        </ChatContainer>
        <PaginationWrapper>
          <InnerPaginationWrap>
            <Stack spacing={1}>
              <Pagination
                count={pages_count}
                color="secondary"
                size="medium"
                defaultPage={page*1}
                onChange={(e) => HandleChange(e)}
              />
            </Stack>
          </InnerPaginationWrap>
        </PaginationWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Izoh;
