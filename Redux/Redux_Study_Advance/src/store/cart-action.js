import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
// 데이터 가져오기
export const fetchCartData = () => {
  return async (dispatch) => {
    // 정보 가져오는 함수 정의
    const fetchData = async () => {
      const response = await fetch(
        "https://projectpractice-63d33-default-rtdb.asia-southeast1.firebasedatabase.app/test.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = response.json();
      return data;
    };

    // 실제 실행부분
    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [], // 비어있는 경우 cartData.items는 null이 됨 따라서 이를 억제하기 위함
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      console.log(JSON.stringify(cart));
      const response = await fetch(
        "https://projectpractice-63d33-default-rtdb.asia-southeast1.firebasedatabase.app/test.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sucess!",
          message: "Sent cart data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }

    // Firebase 서버에 전송 성공시 띄우는 것
  };
};
