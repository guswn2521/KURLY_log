import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Profile from "../public/profile.png";
import CarouselCard from "./Cards/CarouselCard";

const KurlyLogPost = () => {
    const home = "SSAP의 컬리log";
    const user = "SSAP";

    return (
        <Wrapper>
            <Home>
                {home}
            </Home>
            <Contents>
                <Title></Title>
            </Contents>
            <ProductInfo>

            </ProductInfo>
            <UserInfo>
                <div>
                    <Image
                        src={Profile}
                        alt="profile"
                        width={40}
                        height={40}
                    />
                </div>
                <UserName>{user}</UserName>
                <UserTitle>푸드 전문가</UserTitle>
                <Line />
            </UserInfo>
            <Others>
                또 다른 컬리log
                <Line />
                <CarouselView>
                    <CarouselCard />
                </CarouselView>
            </Others>
        </Wrapper>
    );
};

export default KurlyLogPost;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background-color: #f2f2f2;
`;

const Home = styled.div`
    background: white;
    padding: 20px 0;
    text-align: center;
    font-weight: bold;
    color: var(--purple);
`;

const Contents = styled.div`
    height: 500px;  // 수정
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const Title = styled.div`
`;

const ProductInfo = styled.div`
    height: auto;
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const UserInfo = styled.div`
    background: white;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserName = styled.div`
    font-weight: bold;
    color: var(--purple);
`;

const UserTitle = styled.div`
    font-size: 0.8rem;
`;

const Others = styled.div`
    height: auto;
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const Line = styled.div`
    width: 100%;
    background-color: #e2e2e2;
    height: 2px;
    margin: 10px auto;
`;

const CarouselView = styled.div`

`;