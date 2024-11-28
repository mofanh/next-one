export default async function Dashboard(){
    const resData = await fetch('http://localhost:3000/api/v1/route')
    return <div>
        dashboard
        <div>1{resData.title }1</div>
    </div>
}