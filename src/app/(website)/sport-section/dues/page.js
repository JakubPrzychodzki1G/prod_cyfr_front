'use client';
import BlogDiv from "@/components/not-simple/blogdiv";

export default function Page() {
    return (
        <BlogDiv image="https://images.unsplash.com/photo-1643474850547-fff3e61530cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" breadcrump="Składki">
            <div className="h-full flex justify-center">
                <span className="flex flex-col justify-center">
                    <h1 className="text-xl text-blue-400 mb-2">W tytule przelewu proszę umieścić następujące dane:</h1>
                    <table className="mb-1">
                        <tbody>
                            <tr className="border p-2">
                                <td className="border p-2 text-blue-600">* imię i nazwisko członka, za którego jest dokonywana opłata,</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2 text-blue-600">* nr telefonu kontaktowego podany podczas zapisu członka,</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2 text-blue-600">* miesiąc, za który jest dokonywana wpłata składki,</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-[15px] text-red-400">* w przypadku kilku osób (rodzeństwo) opłatę należy dokonywać za każdą osobę oddzielnie.
                    Np. Jan Kowalski-602xxxxxx-Wrzesień</p>
                    <br />
                    <p>Składka członkowska obejmuje opiekę na zajęciach oraz wejście na basen. W przypadku dni wolnych od zajęć ( święta, ferie, itp ) <b>składka miesięczna nie ulega zmianie</b>.
                    Okres prowadzenia zajęć przez KTP Posejdon(inaczej klub Posejdon Konin) to czas od 1 września do końca roku szkolnego w czerwcu.
                    <b>Wysokość składki zależy od ilości godzin zajęć zadeklarowanych w danym tygodniu. Deklarację o ilości zajęć należy podać do trenera / instruktora prowadzącego zajęcia przed rozpoczęciem danego miesiąca</b>. Podajemy ilość zajęć w tygodniu, jeśli nie ulegają zmianie w następnym miesiącu nie ma potrzeby powtórnego zgłaszania.
                    Harmonogram zajęć wskazuje godziny i miejsca zajęć. Klub prowadzi zajęcia  w określonym czasie to znaczy:
                    45min lub 1 godzina oraz 1,5 godziny w zależności od wieku i zaawansowania członka klubu Posejdon Konin.
                    <b>W przypadku nieobecności na zajęciach istnieje możliwość odrobienia zajęć w innym terminie uzgodnionym z osobą prowadzącą zajęcia.</b></p>
                    <br />
                    <h2 className="text-xl mb-3 text-blue-400">Zajęcia prowadzone są przez 45min lub 1 godzinę</h2>

                    <table>
                        <tbody>
                            <tr className="border">
                                <th className="border p-2">Ilość godzin w tygodniu</th>
                                <th className="border p-2">Składka miesięczna</th>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">1</td>
                                <td className="border p-2">150,00 zł</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">2</td>
                                <td className="border p-2">220,00 zł</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">3</td>
                                <td className="border p-2">300,00 zł</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <h2 className="text-xl text-blue-500">Zajęcia grupy sportowej prowadzone są przez 1,5 godziny.</h2>
                    <p className="mb-2">Minimalny udział w zajęciach w tygodniu to <b>3 a maksymalne 6 treningów</b> w zależności od poziomu zawodnika i ustaleń trenera. <b>Koszt miesięczny to 300zł.</b></p>

                    <p className="text-lg mb-2">Zajęcia indywidualne do 3 osób cykliczne (wejście na basen opłacone)</p>
                    <table>
                        <tbody>
                            <tr className="border">
                                <th className="border p-2">Ilość osób na zajęciach</th>
                                <th className="border p-2">Składka za jedne zajęcia</th>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">1</td>
                                <td className="border p-2">90,00 zł</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">2</td>
                                <td className="border p-2">130,00 zł</td>
                            </tr>
                            <tr className="border p-2">
                                <td className="border p-2">3</td>
                                <td className="border p-2">160,00 zł</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-[15px] text-red-500 mt-2">* 50 zł za jednorazowe wejście na zajęcia ( dołączając do istniejącej grupy) bez znaczenia na ich czas.</p>
                </span>
            </div>
        </BlogDiv>
    )
}