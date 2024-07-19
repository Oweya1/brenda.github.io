import { useState } from "react";
import { Switch } from "@headlessui/react";
import Navbar from '../Allpages/Navbar'
import Footer from "../Footer/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="isolate bg-white px-6 py-17 sm:py-10 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Connect with Us to Learn More or Get Involved
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 border-2 border-gray-300 rounded-lg p-6"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="country"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2.5">
              <select
                id="country"
                name="country"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
              >
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Côte d'Ivoire</option>
                <option>Cabo Verde</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo (Congo-Brazzaville)</option>
                <option>Costa Rica</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czechia (Czech Republic)</option>
                <option>Democratic Republic of the Congo</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini (fmr. "Swaziland")</option>
                <option>Ethiopia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Holy See</option>
                <option>Honduras</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mexico</option>
                <option>Micronesia</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Korea</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Palestine State</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States of America</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country-code"
                  name="country-code"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm"
                >
                  <option>AF (+93)</option>
                  <option>AL (+355)</option>
                  <option>DZ (+213)</option>
                  <option>AD (+376)</option>
                  <option>AO (+244)</option>
                  <option>AG (+1-268)</option>
                  <option>AR (+54)</option>
                  <option>AM (+374)</option>
                  <option>AU (+61)</option>
                  <option>AT (+43)</option>
                  <option>AZ (+994)</option>
                  <option>BS (+1-242)</option>
                  <option>BH (+973)</option>
                  <option>BD (+880)</option>
                  <option>BB (+1-246)</option>
                  <option>BY (+375)</option>
                  <option>BE (+32)</option>
                  <option>BZ (+501)</option>
                  <option>BJ (+229)</option>
                  <option>BT (+975)</option>
                  <option>BO (+591)</option>
                  <option>BA (+387)</option>
                  <option>BW (+267)</option>
                  <option>BR (+55)</option>
                  <option>BN (+673)</option>
                  <option>BG (+359)</option>
                  <option>BF (+226)</option>
                  <option>BI (+257)</option>
                  <option>CI (+225)</option>
                  <option>CV (+238)</option>
                  <option>KH (+855)</option>
                  <option>CM (+237)</option>
                  <option>CA (+1)</option>
                  <option>CF (+236)</option>
                  <option>TD (+235)</option>
                  <option>CL (+56)</option>
                  <option>CN (+86)</option>
                  <option>CO (+57)</option>
                  <option>KM (+269)</option>
                  <option>CG (+242)</option>
                  <option>CR (+506)</option>
                  <option>HR (+385)</option>
                  <option>CU (+53)</option>
                  <option>CY (+357)</option>
                  <option>CZ (+420)</option>
                  <option>CD (+243)</option>
                  <option>DK (+45)</option>
                  <option>DJ (+253)</option>
                  <option>DM (+1-767)</option>
                  <option>DO (+1-809)</option>
                  <option>DO (+1-829)</option>
                  <option>DO (+1-849)</option>
                  <option>EC (+593)</option>
                  <option>EG (+20)</option>
                  <option>SV (+503)</option>
                  <option>GQ (+240)</option>
                  <option>ER (+291)</option>
                  <option>EE (+372)</option>
                  <option>SZ (+268)</option>
                  <option>ET (+251)</option>
                  <option>FJ (+679)</option>
                  <option>FI (+358)</option>
                  <option>FR (+33)</option>
                  <option>GA (+241)</option>
                  <option>GM (+220)</option>
                  <option>GE (+995)</option>
                  <option>DE (+49)</option>
                  <option>GH (+233)</option>
                  <option>GR (+30)</option>
                  <option>GD (+1-473)</option>
                  <option>GT (+502)</option>
                  <option>GN (+224)</option>
                  <option>GW (+245)</option>
                  <option>GY (+592)</option>
                  <option>HT (+509)</option>
                  <option>VA (+379)</option>
                  <option>HN (+504)</option>
                  <option>HU (+36)</option>
                  <option>IS (+354)</option>
                  <option>IN (+91)</option>
                  <option>ID (+62)</option>
                  <option>IR (+98)</option>
                  <option>IQ (+964)</option>
                  <option>IE (+353)</option>
                  <option>IL (+972)</option>
                  <option>IT (+39)</option>
                  <option>JM (+1-876)</option>
                  <option>JP (+81)</option>
                  <option>JO (+962)</option>
                  <option>KZ (+7)</option>
                  <option>KE (+254)</option>
                  <option>KI (+686)</option>
                  <option>KW (+965)</option>
                  <option>KG (+996)</option>
                  <option>LA (+856)</option>
                  <option>LV (+371)</option>
                  <option>LB (+961)</option>
                  <option>LS (+266)</option>
                  <option>LR (+231)</option>
                  <option>LY (+218)</option>
                  <option>LI (+423)</option>
                  <option>LT (+370)</option>
                  <option>LU (+352)</option>
                  <option>MG (+261)</option>
                  <option>MW (+265)</option>
                  <option>MY (+60)</option>
                  <option>MV (+960)</option>
                  <option>ML (+223)</option>
                  <option>MT (+356)</option>
                  <option>MH (+692)</option>
                  <option>MR (+222)</option>
                  <option>MU (+230)</option>
                  <option>MX (+52)</option>
                  <option>FM (+691)</option>
                  <option>MD (+373)</option>
                  <option>MC (+377)</option>
                  <option>MN (+976)</option>
                  <option>ME (+382)</option>
                  <option>MA (+212)</option>
                  <option>MZ (+258)</option>
                  <option>MM (+95)</option>
                  <option>NA (+264)</option>
                  <option>NR (+674)</option>
                  <option>NP (+977)</option>
                  <option>NL (+31)</option>
                  <option>NZ (+64)</option>
                  <option>NI (+505)</option>
                  <option>NE (+227)</option>
                  <option>NG (+234)</option>
                  <option>KP (+850)</option>
                  <option>MK (+389)</option>
                  <option>NO (+47)</option>
                  <option>OM (+968)</option>
                  <option>PK (+92)</option>
                  <option>PW (+680)</option>
                  <option>PS (+970)</option>
                  <option>PA (+507)</option>
                  <option>PG (+675)</option>
                  <option>PY (+595)</option>
                  <option>PE (+51)</option>
                  <option>PH (+63)</option>
                  <option>PL (+48)</option>
                  <option>PT (+351)</option>
                  <option>QA (+974)</option>
                  <option>RO (+40)</option>
                  <option>RU (+7)</option>
                  <option>RW (+250)</option>
                  <option>KN (+1-869)</option>
                  <option>LC (+1-758)</option>
                  <option>VC (+1-784)</option>
                  <option>WS (+685)</option>
                  <option>SM (+378)</option>
                  <option>ST (+239)</option>
                  <option>SA (+966)</option>
                  <option>SN (+221)</option>
                  <option>RS (+381)</option>
                  <option>SC (+248)</option>
                  <option>SL (+232)</option>
                  <option>SG (+65)</option>
                  <option>SK (+421)</option>
                  <option>SI (+386)</option>
                  <option>SB (+677)</option>
                  <option>SO (+252)</option>
                  <option>ZA (+27)</option>
                  <option>KR (+82)</option>
                  <option>SS (+211)</option>
                  <option>ES (+34)</option>
                  <option>LK (+94)</option>
                  <option>SD (+249)</option>
                  <option>SR (+597)</option>
                  <option>SE (+46)</option>
                  <option>CH (+41)</option>
                  <option>SY (+963)</option>
                  <option>TJ (+992)</option>
                  <option>TZ (+255)</option>
                  <option>TH (+66)</option>
                  <option>TL (+670)</option>
                  <option>TG (+228)</option>
                  <option>TO (+676)</option>
                  <option>TT (+1-868)</option>
                  <option>TN (+216)</option>
                  <option>TR (+90)</option>
                  <option>TM (+993)</option>
                  <option>TV (+688)</option>
                  <option>UG (+256)</option>
                  <option>UA (+380)</option>
                  <option>AE (+971)</option>
                  <option>GB (+44)</option>
                  <option>US (+1)</option>
                  <option>UY (+598)</option>
                  <option>UZ (+998)</option>
                  <option>VU (+678)</option>
                  <option>VE (+58)</option>
                  <option>VN (+84)</option>
                  <option>YE (+967)</option>
                  <option>ZM (+260)</option>
                  <option>ZW (+263)</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#27AAE1] sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-[#27AAE1]" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27AAE1]"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-[#27AAE1]">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#27AAE1] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#27AAE1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27AAE1]"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
 
}