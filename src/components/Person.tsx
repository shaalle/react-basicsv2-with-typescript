interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
}
export const Person = (props: Props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
         {props.friends.map((firend: string) => {
            return <h1>{firend}</h1>
        })} 
       
    </div>
}

