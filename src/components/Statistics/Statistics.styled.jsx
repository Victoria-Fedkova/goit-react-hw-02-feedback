import styled from 'styled-components';

export const FeedbackInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 700;
`;
export const FeedbackList = styled.ul`
  padding: 0;
  margin-top: 0;
  list-style: none;
  display: flex;
  height: 50px;
  background-color: #e3e9ed;
  border: 1px solid #7c85a6;
  border-radius: 5px;
`;
export const FeedbackItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:not(:last-child) {
    border-right: 1px solid #7c85a6;
  }
`;
export const Feedbacklabel = styled.span`
  color: grey;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;
export const FeedbackQuantity = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
