import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Formulir2() {
    const [nama, setNama] = useState("");
    const [pekerja, setPekerja] = useState("");
    const [tempat, setTempat] = useState("");
    const [noHP, setNoHP] = useState("");
    const [noRumah, setNoRumah] = useState("");
    const [noKantor, setNoKantor] = useState("");
    const [unit, setUnit] = useState("1");
    const [departemen, setDepartemen] = useState("1");
    const [alamat, setAlamat] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`
      Nama        : ${nama} 
      No. Pekerja : ${pekerja}
      Tempat      : ${tempat}
      No. HP      : ${noHP}
      No. Rumah   : ${noRumah}
      No. Kantor  : ${noKantor}
      Unit        : ${unit}
      Departemen  : ${departemen}
      Alamat      : ${alamat}
  
      `);
    }

    const tombol = useNavigate();
    return (
        <div>
            <Header />
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 m-20">
                <h1 className="text-xl font-bold  text-white capitalize dark:text-white">Formulir Keanggotaan SP-FKPPM </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="name">Nama</label>
                            <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="email">No Pekerja</label>
                            <input value={pekerja} onChange={(e) => setPekerja(e.target.value)} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200">Tempat Tanggal Lahir</label>
                            <input value={tempat} onChange={(e) => setTempat(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                    </div >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                        <label className="text-white font-medium text-center dark:text-gray-200" name="email">No Telepon</label>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-white font-medium dark:text-gray-200">HP</label>
                            <input value={noHP} onChange={(e) => setNoHP(e.target.value)} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200">Rumah</label>
                            <input value={noRumah} onChange={(e) => setNoRumah(e.target.value)} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200">Kantor</label>
                            <input value={noKantor} onChange={(e) => setNoKantor(e.target.value)} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="passwordConfirmation">Unit</label>
                            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option selected>Choose a Unit</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="passwordConfirmation">Departement</label>
                            <select value={departemen} onChange={(e) => setDepartemen(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                <option selected>Choose a Departement</option>
                                <option value="1">Departemen Sistem Keuangan</option>
                                <option value="2">Departemen Sumber Daya Manusia</option>
                                <option value="3">Departemen Pengembangan</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="passwordConfirmation">Alamat</label>
                            <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required></textarea>
                        </div>
                        <div>
                            <label className="text-white font-medium dark:text-gray-200" name="passwordConfirmation">Upload File</label>
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="file" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <div className="flex justify-end mt-6">
                            <button onClick={() => tombol('/')} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kembali</button>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Kirim</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Formulir2;