import { useGetTodoQuery } from "@/api/testApi";
import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { increaseCount, setCount } from "@/features/count/countSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ManageArtists = () => {
  const { count } = useSelector((state: RootState) => state.count);
  const [value, setvalue] = useState(0);
  const { data } = useGetTodoQuery(value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Manage Artist</h1>
      {data && <div>{data.title}</div>}
      <p>count:{count}</p>
      <Button
        onClick={() => {
          dispatch(increaseCount(1));
        }}
      >
        Increase
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          dispatch(increaseCount(-1));
        }}
      >
        Decrease
      </Button>
      <Input
        value={value}
        type="number"
        onChange={(event) => setvalue(Number(event.target.value))}
      ></Input>
      <Button variant="outline" onClick={() => dispatch(setCount(value))}>
        Update
      </Button>
    </div>
  );
};
