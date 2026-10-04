import { useState, useEffect} from 'react';
import './UsersDirectory.css';

function UsersDirectory() {
    // مصفوفة لتخزين بيانات المستخدمين
    const [users, setUsers] = useState([]);
   //state لتخزين حالة التحميل
    const [isLoading, setIsLoading] = useState(true);
  //state لتخزين نص البحث
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users?limit=20');
                //تحويل الرد الى الرد إلى كائن JavaScript
                const data = await response.json();
                //تخزين بيانات المستخدمين في state
                setUsers(data.users);
            }catch (error){
                console.error('حدث خطأ أثناء جلب بيانات المستخدمين:', error);
            }finally{
                setIsLoading(false);
            }
        };
        //استدعاء الدالة
      fetchUsers();
    },[]);//مصفوفة فارغة يعني يعمل مرة واحدة عند البداية
    
   //تصفية المسخدمين بناء على نص البحث
   const filteredUsers = users.filter((user)=>{
    //دمج الاسم الاول واسم العائلة للبحث في كليهما
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();//جعل البحث غير حساس للأحرف
     return fullName.includes(searchTerm.toLowerCase())//تحويل نص البحث الى احرف صغيرة
   })



    //عرض حالة التحميل
    if (isLoading) return <p>جاري تحميل بيانات المستخدمين...</p>;

return (
       <div className="users-directory">
      <h1>دليل المستخدمين</h1>
      {/* حقل البحث */}
      <input
        type="text"
        className="search-input"
        placeholder="ابحث عن مستخدم..."
        value={searchTerm}
        /* تحديث searchTerm مع كل حرف يكتبه المستخدم */
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* عرض بطاقات المستخدمين باستخدام map */}
      <div className="users-grid">
        {filteredUsers.map((user)=>(
            <div className="user-card" key={user.id}>
              <img src={user.image} 
              alt={`${user.firstName} ${user.lastName}`} 
              className="user-avatar"
              />
              <h3>{user.firstName} {user.lastName}</h3>
           <p>البريد الإلكتروني: {user.email}</p>
          <p>العنوان: {user.address.city}</p>
            </div>
          ))}
      </div>
    </div>
);
}
export default UsersDirectory;
