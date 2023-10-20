import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";


function Formulir() {
  const [nama, setNama] = useState("");
  const [tempat, setTempat] = useState("");
  const [alamat, setAlamat] = useState("");
  const [npm, setNPM] = useState("");
  // const [semester, setSemester] = useState("");
  const [semester, setSemester] = useState("1");
  const [noHP, setNoHP] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
    Nama    : ${nama} 
    Tempat  : ${tempat}
    Alamat  : ${alamat}
    NPM     : ${npm}
    Semester: ${semester}
    No HP   : ${noHP}
    Email   : ${email}

    `);
  }

  const tombol = useNavigate();
  return (
    <div>
      <Header />
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 m-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Formulir Anggota Perpustakaan</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" name="name">Nama</label>
              <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" name="email">Tempat Tanggal Lahir</label>
              <input type="text" value={tempat} onChange={(e) => setTempat(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" name="password">Alamat</label>
              <textarea type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" name="passwordConfirmation">NPM</label>
              <input type="number" value={npm} onChange={(e) => setNPM(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" name="passwordConfirmation">Semester</label>
              <select value={semester} onChange={(e) => setSemester(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option selected>Choose a Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200" name="passwordConfirmation">No Handphone</label>
              <input type="number" value={noHP} onChange={(e) => setNoHP(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" name="passwordConfirmation">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="example@gmail.com" required />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" name="passwordConfirmation">Upload File</label>
              <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="file" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button onClick={() => tombol('/')} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kembali</button>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Kirim</button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Formulir;
