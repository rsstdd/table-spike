import * as React from 'React';


const AllSizeGuide = () => (
  <React.Fragment>
  <div id="size-chart" className="container">
    <div className="page-title">
        <h1>Sizing Help</h1>
        <p>Our guide for the perfect fit</p>
        <p><b>Sizing can be tricky. Let one of our educators help you find the perfect fit.
Book a complimentary video chat appointment today!</br></b></p>
        <center><a target="_blank" href="https://www.lululemon-digitalconcierge.com/" className="button">Book My Appointment</a></center>
    </div>

    <!-- feed it classes for default values [women|men|girls] [tops|bottoms|bras] [inches|cm] -->
    <div className="toggle-base section outer-container row inches">
        <div className="size-chart-content">
            <div className="inner-container row">
                <h2 className="section-heading">Sizing Charts</h2>
                <p>Select a category</p>
                <div className="gender-tog">
                    <section className="toggle-gender">
                        <button className="women">Women</button>
                        <button className="men">Men</button>
                        <button className="girls">Girls</button>
                    </section>
                </div>
                <div className="product-type-tog">
                    <p>Find size charts for:</p>
                    <section className="toggle-type">
                        <button className="tops">Tops</button>
                        <button className="bottoms">Bottoms</button>
                        <button className="bras">Bras</button>
                        <button className="socks">Socks</button>
                    </section>
                </div>
                <div className="unit-tog">
                    <section className="toggle-unit">
                        <a className="inches" href="javascript:void(0);">inches</a>|<a className="cm" href="javascript:void(0);">centimeters</a>
                    </section>
                </div>
                <div className="all-size-chart">
                    <div className="toggle-elem women">
                        <div className="toggle-elem tops">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Bust</th>
                                            </tr>
                                            <td>0/XXXS</td>
                                            <td>
                                                <div className='toggle-elem inches'>29"</div>
                                                <div className='toggle-elem cm'>53cm</div>
                                            </td>
                                            <tr>
                                                <td>2/XXS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>30"</div>
                                                    <div className='toggle-elem cm'>76cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4/XS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6/S</td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8/M</td>
                                                <td>
                                                    <div className='toggle-elem inches'>36"</div>
                                                    <div className='toggle-elem cm'>91cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10/L</td>
                                                <td>
                                                    <div className='toggle-elem inches'>38"</div>
                                                    <div className='toggle-elem cm'>96cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12/XL</td>
                                                <td>
                                                    <div className='toggle-elem inches'>40"</div>
                                                    <div className='toggle-elem cm'>101cm</div>
                                                </td>
                                            </tr>
                                            <td>14/XXL</td>
                                            <td>
                                                <div className='toggle-elem inches'>42"</div>
                                                <div className='toggle-elem cm'>106cm</div>
                                            </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//tops-->


                        <div className="toggle-elem bottoms">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                                <th>Standard Inseam</th>
                                                <th>Tall Inseam</th>
                                            </tr>
                                            <td>0/XXXS</td>
                                            <td>
                                                <div className='toggle-elem inches'>21"</div>
                                                <div className='toggle-elem cm'>55cm</div>
                                            </td>
                                            <td>
                                                <div className='toggle-elem inches'>32"</div>
                                                <div className='toggle-elem cm'>80cm</div>
                                            </td>
                                            <td>
                                                <div className='toggle-elem inches'>31"</div>
                                                <div className='toggle-elem cm'>79cm</div>
                                            </td>
                                            <td>
                                                <div className='toggle-elem inches'>-</div>
                                                <div className='toggle-elem cm'>-</div>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>2/XXS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>23"</div>
                                                    <div className='toggle-elem cm'>59cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>33"</div>
                                                    <div className='toggle-elem cm'>84cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4/XS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>25"</div>
                                                    <div className='toggle-elem cm'>64cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6/S</td>
                                                <td>
                                                    <div className='toggle-elem inches'>27"</div>
                                                    <div className='toggle-elem cm'>69cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8/M</td>
                                                <td>
                                                    <div className='toggle-elem inches'>29"</div>
                                                    <div className='toggle-elem cm'>74cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>39"</div>
                                                    <div className='toggle-elem cm'>99cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10/L</td>
                                                <td>
                                                    <div className='toggle-elem inches'>31"</div>
                                                    <div className='toggle-elem cm'>79cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>41"</div>
                                                    <div className='toggle-elem cm'>104cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12/XL</td>
                                                <td>
                                                    <div className='toggle-elem inches'>33"</div>
                                                    <div className='toggle-elem cm'>84cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>42"</div>
                                                    <div className='toggle-elem cm'>106cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>14/XXL</td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>45"</div>
                                                    <div className='toggle-elem cm'>114cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="toggle-elem bras">
                            <h2 className="section-heading">Bra Sizing Chart</h2>
                            <div className="fit-guidelines">
                                <p>We have big news! We've updated our sizing chart and measurement guide so you can have a better fitting bra all day long, no matter where you go or how you sweat. Scroll down for detailed instructions on how to find your
                                    perfect fit.</p>
                            </div>


                            <div className="toggle-elem inches">
                                <div style='position:relative;'>
                                    <div className='size-chart-wrapper'>
                                        <div className='size-chart-outer'>
                                            <div className='size-chart-scroll'>
                                                <table className='size-chart'>
                                                    <tr>
                                                        <th>Underband Size</th>
                                                        <th colspan='10'>Cup Size</th>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>4-3/4" - 5 1/4"<strong></strong></td>
                                                        <td>5-1/4" - 5-7/8"<strong></strong></td>
                                                        <td>5-7/8" - 6-1/2"<strong></strong></td>
                                                        <td>6-1/2" - 7"<strong></strong></td>
                                                        <td>7" - 7-5/8"<strong></strong></td>
                                                        <td>7-5/8" - 8-1/4"<strong></strong></td>
                                                        <td>8-1/4" - 8-7/8"<strong></strong></td>
                                                        <td>8-7/8" - 9-1/2"<strong></strong></td>
                                                        <td>9-1/2" - 10-1/8"<strong></strong></td>
                                                        <td>10-1/8" - 10-3/4"<strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>22 1/2 - 24 1/2"</td>
                                                        <td><span className='unavailable'>28A</span><strong>2 A/B</strong></td>
                                                        <td><span className='unavailable'>28B</span><strong>2 A/B 2 B/C</strong></td>
                                                        <td><span className='unavailable'>28C</span><strong>2 B/C 2 C/D</strong></td>
                                                        <td><span className='unavailable'>28D</span><strong>2 C/D</strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>24 1/2 - 26 1/2"</td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>30A</span><strong>4 A/B</strong></td>
                                                        <td><span className='unavailable'>30B</span><strong>4 A/B 4 B/C</strong></td>
                                                        <td><span className='unavailable'>30C</span><strong>4 B/C 4 C/D</strong></td>
                                                        <td><span className='unavailable'>30D</span><strong>4 C/D</strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>26 1/2 - 28 1/2"</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>32A</span><strong>6 A/B</strong></td>
                                                        <td>32B<strong>6 A/B 6 B/C</strong></td>
                                                        <td>32C<strong>6 B/C 6 C/D</strong></td>
                                                        <td>32D<strong>6 C/D</strong></td>
                                                        <td>32DD<strong></strong></td>
                                                        <td>32E<strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>28 1/2 - 30 1/2"</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td>34A<strong>8 A/B</strong></td>
                                                        <td>34B<strong>8 A/B 8 B/C</strong></td>
                                                        <td>34C<strong>8 B/C 8C/D</strong></td>
                                                        <td>34D<strong>8 C/D</strong></td>
                                                        <td>34DD<strong></strong></td>
                                                        <td>34E<strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>30 1/2 - 32 1/2"</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td>36A<strong>10 A/B</strong></td>
                                                        <td>36B<strong>10 A/B 10 B/C</strong></td>
                                                        <td>36C<strong>10 B/C 10 C/D</strong></td>
                                                        <td>36D<strong>10 C/D</strong></td>
                                                        <td>36DD<strong></strong></td>
                                                        <td>36E<strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>32 1/2 - 34 1/2"</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>38A</span><strong>12 A/B</strong></td>
                                                        <td><span className='unavailable'>38B</span><strong>12 A/B 12 B/C</strong></td>
                                                        <td>38C<strong>12 B/C 12 C/D</strong></td>
                                                        <td>38D<strong>12 C/D</strong></td>
                                                        <td>38DD<strong></strong></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bras-label'>Cup Size</div>
                                </div>
                            </div>

                            <div className="toggle-elem cm">
                                <div style='position:relative;'>
                                    <div className='size-chart-wrapper'>
                                        <div className='size-chart-outer'>
                                            <div className='size-chart-scroll'>
                                                <table className='size-chart'>
                                                    <tr>
                                                        <th>Underband Size</th>
                                                        <th colspan='9'>Cup Size</th>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>12 - 13.5cm<strong></strong></td>
                                                        <td>13.5 - 15cm<strong></strong></td>
                                                        <td>15 - 16.5cm<strong></strong></td>
                                                        <td>16.5 - 18cm<strong></strong></td>
                                                        <td>18 - 19.5cm<strong></strong></td>
                                                        <td>19.5 - 21cm<strong></strong></td>
                                                        <td>21 - 22.5cm<strong></strong></td>
                                                        <td>22.5 - 24cm<strong></strong></td>
                                                        <td>24 - 25.5cm<strong></strong></td>
                                                        <td>25.5 - 27cm<strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>57.5 - 62.5cm</td>
                                                        <td><span className='unavailable'>28A</span><strong>2 A/B</strong></td>
                                                        <td><span className='unavailable'>28B</span><strong>2 A/B 2 B/C</strong></td>
                                                        <td><span className='unavailable'>28C</span><strong>2 B/C 2 C/D</strong></td>
                                                        <td><span className='unavailable'>28D</span><strong>2 C/D</strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>62.5 - 67.5cm</td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>30A</span><strong>4 A/B</strong></td>
                                                        <td><span className='unavailable'>30B</span><strong>4 A/B 4 B/C</strong></td>
                                                        <td><span className='unavailable'>30C</span><strong>4 B/C 4 C/D</strong></td>
                                                        <td><span className='unavailable'>30D</span><strong>4 C/D</strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>67.5 - 72.5cm</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>32A</span><strong>6 A/B</strong></td>
                                                        <td>32B<strong>6 A/B 6 B/C</strong></td>
                                                        <td>32C<strong>6 B/C 6 C/D</strong></td>
                                                        <td>32D<strong>6 C/D</strong></td>
                                                        <td>32DD<strong></strong></td>
                                                        <td>32E<strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>72.5 - 77.5cm</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td>34A<strong>8 A/B</strong></td>
                                                        <td>34B<strong>8 A/B 8 B/C</strong></td>
                                                        <td>34C<strong>8 B/C 8C/D</strong></td>
                                                        <td>34D<strong>8 C/D</strong></td>
                                                        <td>34DD<strong></strong></td>
                                                        <td>34E<strong></strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>77.5 - 82.5cm</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td>36A<strong>10 A/B</strong></td>
                                                        <td>36B<strong>10 A/B 10 B/C</strong></td>
                                                        <td>36C<strong>10 B/C 10 C/D</strong></td>
                                                        <td>36D<strong>10 C/D</strong></td>
                                                        <td>36DD<strong></strong></td>
                                                        <td>36E<strong></strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>82.5 - 87.5cm</td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><strong></strong></td>
                                                        <td><span className='unavailable'>38A</span><strong>12 A/B</strong></td>
                                                        <td><span className='unavailable'>38B</span><strong>12 A/B 12 B/C</strong></td>
                                                        <td>38C<strong>12 B/C 12 C/D</strong></td>
                                                        <td>38D<strong>12 C/D</strong></td>
                                                        <td>38DD<strong></strong></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bras-label'>Cup Size</div>
                                </div>
                            </div>
                        </div>
                        <!--//bras-->


                        <div className="toggle-elem socks">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart socks-size-chart'>
                                            <tr>
                                                <th rowspan='2'>lululemon size</th>
                                                <td className='spacer'></td>
                                                <td colspan='5' className='highlight'>S/M</td>
                                                <td colspan='6' className='highlight'>M/L</td>
                                            </tr>
                                            <tr>
                                                <td className='spacer'></td>
                                                <td colspan='2' className='spacer'></td>
                                                <td colspan='6' className='highlight'>O/S</td>
                                                <td colspan='3' className='spacer'></td>
                                            </tr>
                                            <tr>
                                                <th rowspan='6'>shoe size</th>
                                                <td>north america</td>
                                                <td>5</td>
                                                <td>5.5</td>
                                                <td>6</td>
                                                <td>6.5</td>
                                                <td>7</td>
                                                <td>7.5</td>
                                                <td>8</td>
                                                <td>8.5</td>
                                                <td>9</td>
                                                <td>9.5</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>europe</td>
                                                <td>35</td>
                                                <td>35.5</td>
                                                <td>36</td>
                                                <td>37</td>
                                                <td>37.5</td>
                                                <td>38</td>
                                                <td>38.5</td>
                                                <td>39</td>
                                                <td>40</td>
                                                <td>41</td>
                                                <td>42</td>
                                            </tr>
                                            <tr>
                                                <td>UK</td>
                                                <td>2.5</td>
                                                <td>3</td>
                                                <td>3.5</td>
                                                <td>4</td>
                                                <td>4.5</td>
                                                <td>5</td>
                                                <td>5.5</td>
                                                <td>6</td>
                                                <td>6.5</td>
                                                <td>7</td>
                                                <td>7.5</td>
                                            </tr>
                                            <tr>
                                                <td>china</td>
                                                <td>22.8</td>
                                                <td>23.1</td>
                                                <td>23.5</td>
                                                <td>23.8</td>
                                                <td>24.1</td>
                                                <td>24.5</td>
                                                <td>24.8</td>
                                                <td>25.1</td>
                                                <td>25.4</td>
                                                <td>25.7</td>
                                                <td>26</td>
                                            </tr>
                                            <tr>
                                                <td>japan</td>
                                                <td>21</td>
                                                <td>21.5</td>
                                                <td>22</td>
                                                <td>22.5</td>
                                                <td>23</td>
                                                <td>23.5</td>
                                                <td>24</td>
                                                <td>24.5</td>
                                                <td>25</td>
                                                <td>25.5</td>
                                                <td>26</td>
                                            </tr>
                                            <tr>
                                                <td>korea</td>
                                                <td>228</td>
                                                <td>231</td>
                                                <td>235</td>
                                                <td>238</td>
                                                <td>241</td>
                                                <td>245</td>
                                                <td>248</td>
                                                <td>251</td>
                                                <td>254</td>
                                                <td>257</td>
                                                <td>260</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//socks-->


                    </div>
                    <!--women-->

                    <div className="toggle-elem men">
                        <div className="toggle-elem tops">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Chest</th>
                                            </tr>
                                            <tr>
                                                <td>XS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>S</td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>M</td>
                                                <td>
                                                    <div className='toggle-elem inches'>39"</div>
                                                    <div className='toggle-elem cm'>99cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>36</td>
                                                <td>
                                                    <div className='toggle-elem inches'>42"</div>
                                                    <div className='toggle-elem cm'>106.5cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>38</td>
                                                <td>
                                                    <div className='toggle-elem inches'>45"</div>
                                                    <div className='toggle-elem cm'>114cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>40</td>
                                                <td>
                                                    <div className='toggle-elem inches'>48"</div>
                                                    <div className='toggle-elem cm'>122cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="toggle-elem bottoms">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                                <th>Standard Inseam</th>
                                                <th>Tall Inseam</th>
                                            </tr>
                                            <tr>
                                                <td>26-27/XS</td>
                                                <td>
                                                    <div className='toggle-elem inches'>28"</div>
                                                    <div className='toggle-elem cm'>71cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86.5cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>28-30/S</td>
                                                <td>
                                                    <div className='toggle-elem inches'>30"</div>
                                                    <div className='toggle-elem cm'>76cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>36"</div>
                                                    <div className='toggle-elem cm'>91.5cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>31-33/M</td>
                                                <td>
                                                    <div className='toggle-elem inches'>32"</div>
                                                    <div className='toggle-elem cm'>81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>38"</div>
                                                    <div className='toggle-elem cm'>96.5cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>33-34/L</td>
                                                <td>
                                                    <div className='toggle-elem inches'>35"</div>
                                                    <div className='toggle-elem cm'>89cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>41"</div>
                                                    <div className='toggle-elem cm'>104cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>36-38/XL</td>
                                                <td>
                                                    <div className='toggle-elem inches'>38"</div>
                                                    <div className='toggle-elem cm'>96.5cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>44"</div>
                                                    <div className='toggle-elem cm'>112cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>38-40/XXL</td>
                                                <td>
                                                    <div className='toggle-elem inches'>41"</div>
                                                    <div className='toggle-elem cm'>104cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>47"</div>
                                                    <div className='toggle-elem cm'>119cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>34"</div>
                                                    <div className='toggle-elem cm'>86cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>37"</div>
                                                    <div className='toggle-elem cm'>94cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//bottoms-->




                        <div className="toggle-elem socks">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart socks-size-chart'>
                                            <tr>
                                                <th>lululemon size</th>
                                                <td className='spacer'></td>
                                                <td colspan='6' className='highlight'>M/L</td>
                                                <td colspan='7' className='highlight'>L/XL</td>
                                            </tr>
                                            <tr>
                                                <th rowspan='6'>shoe size</th>
                                                <td>north america</td>
                                                <td>7</td>
                                                <td>7.5</td>
                                                <td>8</td>
                                                <td>8.5</td>
                                                <td>9</td>
                                                <td>9.5</td>
                                                <td>10</td>
                                                <td>10.5</td>
                                                <td>11</td>
                                                <td>11.5</td>
                                                <td>12</td>
                                                <td>12.5</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td>europe</td>
                                                <td>39</td>
                                                <td>40</td>
                                                <td>41</td>
                                                <td>42</td>
                                                <td>43</td>
                                                <td>43.5</td>
                                                <td>43.5</td>
                                                <td>44</td>
                                                <td>44.5</td>
                                                <td>45</td>
                                                <td>46</td>
                                                <td>46.5</td>
                                                <td>47</td>
                                            </tr>
                                            <tr>
                                                <td>UK</td>
                                                <td>6.5</td>
                                                <td>7</td>
                                                <td>7.5</td>
                                                <td>8</td>
                                                <td>8.5</td>
                                                <td>9</td>
                                                <td>9.5</td>
                                                <td>10</td>
                                                <td>10.5</td>
                                                <td>11</td>
                                                <td>11.5</td>
                                                <td>12</td>
                                                <td>12.5</td>
                                            </tr>
                                            <tr>
                                                <td>china</td>
                                                <td>25.1</td>
                                                <td>25.4</td>
                                                <td>25.7</td>
                                                <td>26</td>
                                                <td>26.7</td>
                                                <td>27</td>
                                                <td>27</td>
                                                <td>27.3</td>
                                                <td>27.6</td>
                                                <td>27.9</td>
                                                <td>28.3</td>
                                                <td>28.6</td>
                                                <td>28.9</td>
                                            </tr>
                                            <tr>
                                                <td>japan</td>
                                                <td>25</td>
                                                <td>25.5</td>
                                                <td>26</td>
                                                <td>26.5</td>
                                                <td>27.5</td>
                                                <td>28</td>
                                                <td>28</td>
                                                <td>28.5</td>
                                                <td>29</td>
                                                <td>29.5</td>
                                                <td>30</td>
                                                <td>30.5</td>
                                                <td>31</td>
                                            </tr>
                                            <tr>
                                                <td>korea</td>
                                                <td>251</td>
                                                <td>254</td>
                                                <td>257</td>
                                                <td>260</td>
                                                <td>267</td>
                                                <td>270</td>
                                                <td>270</td>
                                                <td>273</td>
                                                <td>276</td>
                                                <td>279</td>
                                                <td>283</td>
                                                <td>286</td>
                                                <td>289</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//socks-->


                    </div>
                    <!-- men -->

                    <div className="toggle-elem girls">
                        <div className="toggle-elem tops bottoms fit-guidelines">
                            <p>Ensuring the best possible fit is essential to loving the pieces she moves in. Use the size chart to find a fit measured to her.</p>
                        </div>
                        <div className="toggle-elem tops">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Height</th>
                                                <th>Chest</th>
                                                <th>Torso</th>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>
                                                    <div className='toggle-elem inches'>45 - 49"</div>
                                                    <div className='toggle-elem cm'>114 - 124cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>23 - 24"</div>
                                                    <div className='toggle-elem cm'>58 - 61cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>42 - 44"</div>
                                                    <div className='toggle-elem cm'>107 - 112cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>
                                                    <div className='toggle-elem inches'>48 - 52"</div>
                                                    <div className='toggle-elem cm'>122 - 132cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>24&frac12; - 25&frac12;"</div>
                                                    <div className='toggle-elem cm'>62 - 65cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>44&frac12; - 47&frac12;"</div>
                                                    <div className='toggle-elem cm'>113 - 121cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>
                                                    <div className='toggle-elem inches'>51 - 55"</div>
                                                    <div className='toggle-elem cm'>130 - 140cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>26 - 27"</div>
                                                    <div className='toggle-elem cm'>66 - 69cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>46 - 49"</div>
                                                    <div className='toggle-elem cm'>117 - 124cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>
                                                    <div className='toggle-elem inches'>55 - 59"</div>
                                                    <div className='toggle-elem cm'>140 - 150cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>27&frac12; - 28&frac12;"</div>
                                                    <div className='toggle-elem cm'>70 - 72cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>49 - 52"</div>
                                                    <div className='toggle-elem cm'>124 - 132cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>
                                                    <div className='toggle-elem inches'>59 - 63"</div>
                                                    <div className='toggle-elem cm'>150 - 160cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>29 - 30"</div>
                                                    <div className='toggle-elem cm'>74 - 76cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>52&frac12; - 55&frac12;"</div>
                                                    <div className='toggle-elem cm'>133 - 141cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>
                                                    <div className='toggle-elem inches'>62 - 66"</div>
                                                    <div className='toggle-elem cm'>157 - 168cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>31 - 32"</div>
                                                    <div className='toggle-elem cm'>79 - 81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>55&frac12; - 58&frac12;"</div>
                                                    <div className='toggle-elem cm'>141 - 149cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--// tops -->


                        <div className="toggle-elem bottoms">
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Height</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                                <th>Inseam</th>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>
                                                    <div className='toggle-elem inches'>45 - 49"</div>
                                                    <div className='toggle-elem cm'>114 - 124cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>21 - 22"</div>
                                                    <div className='toggle-elem cm'>53 - 56cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>25 - 26"</div>
                                                    <div className='toggle-elem cm'>64 - 66cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>20 - 21"</div>
                                                    <div className='toggle-elem cm'>51 - 53cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>
                                                    <div className='toggle-elem inches'>48 - 52"</div>
                                                    <div className='toggle-elem cm'>122 - 132cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>22 - 23"</div>
                                                    <div className='toggle-elem cm'>56 - 58cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>26&frac12; - 27&frac12;"</div>
                                                    <div className='toggle-elem cm'>67 - 70cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>22&frac12; - 23&frac12;"</div>
                                                    <div className='toggle-elem cm'>57 - 60cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>
                                                    <div className='toggle-elem inches'>51 - 55"</div>
                                                    <div className='toggle-elem cm'>130 - 140cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>22&frac12; - 23&frac12;"</div>
                                                    <div className='toggle-elem cm'>57 - 60cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>28 - 29"</div>
                                                    <div className='toggle-elem cm'>71 - 74cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>24 - 25"</div>
                                                    <div className='toggle-elem cm'>61 - 64cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>
                                                    <div className='toggle-elem inches'>55 - 59"</div>
                                                    <div className='toggle-elem cm'>140 - 150cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>23&frac12; - 24&frac12;"</div>
                                                    <div className='toggle-elem cm'>60 - 62cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>29&frac12; - 30&frac12;"</div>
                                                    <div className='toggle-elem cm'>75 - 77cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>26 - 27"</div>
                                                    <div className='toggle-elem cm'>66 - 69cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>
                                                    <div className='toggle-elem inches'>59 - 63"</div>
                                                    <div className='toggle-elem cm'>150 - 160cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>25 - 26"</div>
                                                    <div className='toggle-elem cm'>64 - 66cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>31&frac12; - 32&frac12;"</div>
                                                    <div className='toggle-elem cm'>80 - 83cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>27 - 28"</div>
                                                    <div className='toggle-elem cm'>69 - 71cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>
                                                    <div className='toggle-elem inches'>62 - 66"</div>
                                                    <div className='toggle-elem cm'>157 - 168cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>26&frac12; - 27&frac12;"</div>
                                                    <div className='toggle-elem cm'>67 - 70cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>33&frac12; - 34&frac12;"</div>
                                                    <div className='toggle-elem cm'>85 - 88cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>28 - 29"</div>
                                                    <div className='toggle-elem cm'>71 - 74cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//bottoms-->


                        <div className="toggle-elem bras">
                            <div className="fit-guidelines">
                                <p>Ensuring the best possible fit is essential to loving the pieces she moves in. Her bra should always stay in place, straps should stay put and feel comfy. Use the size chart to find a fit measured to her.</p>
                            </div>
                            <div className='size-chart-wrapper'>
                                <div className='size-chart-outer'>
                                    <div className='size-chart-scroll'>
                                        <table className='size-chart'>
                                            <tr>
                                                <th>Size</th>
                                                <th>Chest</th>
                                                <th>Torso</th>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>
                                                    <div className='toggle-elem inches'>23 - 24"</div>
                                                    <div className='toggle-elem cm'>58 - 61cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>42 - 44"</div>
                                                    <div className='toggle-elem cm'>107 - 112cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>
                                                    <div className='toggle-elem inches'>24&frac12; - 25&frac12;"</div>
                                                    <div className='toggle-elem cm'>62 - 65cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>44&frac12; - 47&frac12;"</div>
                                                    <div className='toggle-elem cm'>113 - 121cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>
                                                    <div className='toggle-elem inches'>26 - 27"</div>
                                                    <div className='toggle-elem cm'>66 - 69cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>46 - 49"</div>
                                                    <div className='toggle-elem cm'>117 - 124cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>
                                                    <div className='toggle-elem inches'>27&frac12; - 28&frac12;"</div>
                                                    <div className='toggle-elem cm'>70 - 72cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>49 - 52"</div>
                                                    <div className='toggle-elem cm'>124 - 132cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>
                                                    <div className='toggle-elem inches'>29 - 30"</div>
                                                    <div className='toggle-elem cm'>74 - 76cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>52&frac12; - 55&frac12;"</div>
                                                    <div className='toggle-elem cm'>133 - 141cm</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>
                                                    <div className='toggle-elem inches'>31 - 32"</div>
                                                    <div className='toggle-elem cm'>79 - 81cm</div>
                                                </td>
                                                <td>
                                                    <div className='toggle-elem inches'>55&frac12; - 58&frac12;"</div>
                                                    <div className='toggle-elem cm'>141 - 149cm</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--// bras -->


                        <div className="toggle-elem socks">
                            <h3>Socks</h3>
                            <div className='size-chart-wrapper'>
                                <div className=''>
                                    <div className=''>
                                        <table className='size-chart'>
                                            <tr>
                                                <th width='50%'>Size</th>
                                                <th width='50%'>Shoe Size</th>
                                            </tr>
                                            <tr>
                                                <td>6/XS</td>
                                                <td rowspan='3'>11 (kids) - 4 (womens)</td>
                                            </tr>
                                            <tr>
                                                <td>7/S</td>
                                            </tr>
                                            <tr>
                                                <td>8/S</td>
                                            </tr>
                                            <tr>
                                                <td>10/M</td>
                                                <td rowspan='3'>4 - 9 womens</td>
                                            </tr>
                                            <tr>
                                                <td>12/M</td>
                                            </tr>
                                            <tr>
                                                <td>14/L</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="toggle-elem socks">
                            <h3>Dance Tights</h3>
                            <div className='size-chart-wrapper'>
                                <div className=''>
                                    <div className=''>
                                        <table className='size-chart'>
                                            <tr>
                                                <th width='33.33%'>Size</th>
                                                <th width='33.33%'>Height</th>
                                                <th width='33.33%'>Weight</th>
                                            </tr>
                                            <tr>
                                                <td>6/XS</td>
                                                <td rowspan='3'>
                                                    <div className='toggle-elem inches'>46 - 54"</div>
                                                    <div className='toggle-elem cm'>117 - 137cm</div>
                                                </td>
                                                <td rowspan='3'>
                                                    <div className='toggle-elem inches'>42 - 70 lbs</div>
                                                    <div className='toggle-elem cm'>19 - 32 kg</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7/S</td>
                                            </tr>
                                            <tr>
                                                <td>8/S</td>
                                            </tr>
                                            <tr>
                                                <td>10/M</td>
                                                <td rowspan='3'>
                                                    <div className='toggle-elem inches'>55 - 65"</div>
                                                    <div className='toggle-elem cm'>140 - 165cm</div>
                                                </td>
                                                <td rowspan='3'>
                                                    <div className='toggle-elem inches'>70 - 115 lbs</div>
                                                    <div className='toggle-elem cm'>32 - 52 kg</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>12/M</td>
                                            </tr>
                                            <tr>
                                                <td>14/L</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--// socks-->
                    </div>
                    <!--// girls -->
                    <div className="toggle-elem women">
                        <div className="toggle-elem tops bottoms">
                            <div className="conversion">
                                <h2 className="section-heading">Conversion Chart</h2>
                                <div className='size-chart-wrapper'>
                                    <div className='size-chart-outer'>
                                        <div className='size-chart-scroll'>
                                            <table className='size-chart'>
                                                <tr>
                                                    <th>lululemon size</th>
                                                    <th>Australia / UK</th>
                                                    <th>European</th>
                                                </tr>
                                                <tr>
                                                    <td>0/XXXS</td>
                                                    <td>4</td>
                                                    <td>32</td>
                                                </tr>
                                                <tr>
                                                    <td>2/XXS</td>
                                                    <td>6</td>
                                                    <td>34</td>
                                                </tr>
                                                <tr>
                                                    <td>4/XS</td>
                                                    <td>8</td>
                                                    <td>36</td>
                                                </tr>
                                                <tr>
                                                    <td>6/S</td>
                                                    <td>10</td>
                                                    <td>38</td>
                                                </tr>
                                                <tr>
                                                    <td>8/M</td>
                                                    <td>12</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr>
                                                    <td>10/L</td>
                                                    <td>14</td>
                                                    <td>42</td>
                                                </tr>
                                                <tr>
                                                    <td>12/XL</td>
                                                    <td>16</td>
                                                    <td>44</td>
                                                    <tr>
                                                        <td>14/XXL</td>
                                                        <td>18</td>
                                                        <td>46</td>
                                                    </tr>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--//tops bottoms-->
                    </div>
                    <!--//women-->
                </div>
                <!--//all-size-chart-->
            </div>
            <!--//inner-container-->
            <div className="find-your-fit row">
                <div className="toggle-elem women">
                    <div className="toggle-elem bras">
                        <h2 className="section-heading">Measurement Instructions</h2>
                        <div className="row how-to-measure">
                            <div className="pdp-fit">
                                <div className="pdp-fit__video">
                                    <div className="pdp-fit__video--label">Underband</div>
                                    <video className="pdp-fit__video--vid" height="308" width="548" poster="https://images.lululemon.com/is/image/lululemon/EB%5FSCREENS%5F0003%5F2A?$BBR%5FPDPzoomCompress$" autoplay="" loop="">
                                      <source type="video/mp4" src="https://images.lululemon.com/is/content/lululemon/AB%20Test%20Assets/2017/PDP-Enlite-Bra/EBF_1920_FRES_CC_2A_548x308.mp4" />
                                      <img src="https://images.lululemon.com/is/image/lululemon/EB%5FSCREENS%5F0003%5F2A?$BBR%5FPDPzoomCompress$" title="Your browser does not support the <video> tag" />
                                    </video>
                                </div>
                                <div className="pdp-fit__video">
                                    <div className="pdp-fit__video--label">Cup Size</div>
                                    <video className="pdp-fit__video--vid" height="308" width="548" poster="https://images.lululemon.com/is/image/lululemon/EB%5FSCREENS%5F0002%5F2B?$BBR%5FPDPzoomCompress$" autoplay="" loop="">
                                      <source type="video/mp4" src="https://images.lululemon.com/is/content/lululemon/AB%20Test%20Assets/2017/PDP-Enlite-Bra/EBF_1920_FRES_CC_2B_548x308.mp4" />
                                      <img src="https://images.lululemon.com/is/image/lululemon/EB%5FSCREENS%5F0002%5F2B?$BBR%5FPDPzoomCompress$" title="Your browser does not support the <video> tag" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="toggle-elem tops row">
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <h4>Finding the Right Fit in Luon&reg; Fabric</h4>
                            <p>Luon fabric is designed to have a matte finish, so if there's an underlying sheen that reflects the light, the fit's too snug. To see what the sheen looks like, stretch the Luon fabric width-wise with your hands. A fit that's
                                too snug may restrict your movement. And, let's be real, One-Legged King Pigeon Pose is hard enough to get into on a good day.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bottoms row">
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <h4>Finding the Right Fit in Luon&reg; Fabric</h4>
                            <p>Luon fabric is designed to have a matte finish, so if there's an underlying sheen that reflects the light, the fit's too snug. To see what the sheen looks like, stretch the Luon fabric width-wise with your hands. A fit that's
                                too snug may restrict your movement. And, let's be real, One-Legged King Pigeon Pose is hard enough to get into on a good day.</p>
                            <h4>Hemming</h4>
                            <p>If you don't have a lululemon store nearby and need to get your pants hemmed, start with a trusted tailor who can do the same type of double-stitching we've used&mdash;this will ensure the integrity of the gear stays intact.</p>
                            <p>Still have questions? Check out our <a href="//info.lululemon.com/help/our-products/hemming">Hemming</a> policies.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bras row">
                        <div className="fit-guidelines inner-container">
                            <p>Finding your perfect fit is now easier than ever:</p>


                            <h4>Step 1: Find a tape measure</h4>
                            <p>We recommend wearing a non-padded non-compression bra for most accurate results and if you're wearing a tank or a tee, it's best to give the tape measure a slight squeeze to get as close to the skin as possible.</p>


                            <h4>Step 2: Measure the underband</h4>
                            <p>Place the tape measure just below your bust and wrap around the circumference of your ribcage.</p>
                            <p><strong>Note:</strong> It's best to keep the tape measure parallel to the floor while measuring</p>


                            <h4>Step 3: Measure your cup size</h4>
                            <p>Beginning at the center front of your chest, where the breast tissue begins, measure horizontally over the breast with the tape measure across the widest point, stopping at the outer side body where the breast tissue ends.</p>
                            <p><strong>Note:</strong> This measuring technique is to find your sports bra size, not the size of an underwire bra. To measure the cup size from against your chest, press into the center front of your bra with your tape measure
                                before you begin.</p>
                        </div>
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <p>Your recommended bra size is a starting point that should be used as a guide. Try some on so you can see how the bra feels on your body. Every bra should fit snug&mdash;wearing it too loose won't provide you with the support
                                you need. </p>
                            <p>Bra support comes mostly from the band so it's important that it fits quite close to your ribcage. It can take some work (but, it's worth it!) so be patient and adjust your bra size up or down until you nail it.</p>
                        </div>
                    </div>
                </div>
                <!--//women-->
                <div className="toggle-elem men">
                    <div className="toggle-elem tops row">
                        <div className="row">
                            <h2 className="section-heading">How to Measure</h2>
                        </div>
                        <div className="row how-to-measure inner-container">
                            <h4>Chest</h4>
                            <p>Place the measuring tape around the largest part of your chest&mdash;often this is around your nipples. The tape should be flat, but not too tight.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bottoms row">
                        <div className="row">
                            <h2 className="section-heading">How to Measure</h2>
                        </div>
                        <div className="row how-to-measure inner-container">
                            <h4>Waist</h4>
                            <p>For lettered sizes: Use the waist and hip measurements as a guide to pick the right size for you.</p>
                            <p>For numbered sizes: Our pants fit like your favorite chinos. If you're a 32 in the pants you have at home, you'll likely be a 32 in our pants. Bodies come in all shapes and sizes. Normally we select bottom sizes based off our
                                waist size. Guys with a hockey bum might want to size up to accommodate your hip measurement.</p>


                            <h4>Hip</h4>
                            <p>Measuring your hip is simple, all you need is a tape measure and a full length mirror (or a friend). Wrap the tape measure around the roundest part of your bum and overlap the tape at the front. Turn to the side in the mirror
                                to ensure that the tape measure is making a straight line parallel to the floor. Now look down and check that number!</p>


                            <h4>Inseam</h4>
                            <p>Friends are helpful for this one. Stand with your feet about shoulder-width apart in running shoes. Measure from the very top of your inner leg to the bottom of your inner ankle. Repeat this process on your left leg and average
                                out to achieve your most accurate inseam length. You may want to err on the longer-side&mdash;short shorts are a yes, but short pants are a no.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bottoms row">
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <h4>Finding the Right Fit</h4>
                            <p>If your waist measures 33", you're most likely going to need a size 34 pant. This is because we have designed our pants to sit two to three inches below your natural waist. Looking for a good rule of thumb when it comes to
                                fit? Measure your waist and add an inch.</p>
                            <p>If you think you're in between sizes, ask yourself how you want the pant to fit for the activity you'll be using them for.</p>
                            <h4>Hemming</h4>
                            <p>If you don't have a lululemon store nearby and need to get your pants hemmed, start with a trusted tailor who can do the same type of double-stitching we've used&mdash;this will ensure the integrity of the gear stays intact.</p>
                            <p>Still have questions? Check out our <a href="//info.lululemon.com/help/our-products/hemming">Hemming</a> policies.</p>
                        </div>
                    </div>
                </div>
                <!--//men-->
                <div className="toggle-elem girls">
                    <div className="toggle-elem tops row">
                        <div className="row">
                            <h2 className="section-heading">How to Measure</h2>
                        </div>
                        <div className="row how-to-measure inner-container">
                            <h4>Height</h4>
                            <p>The vertical distance from the crown of her head to the floor.</p>
                            <h4>Chest</h4>
                            <p>Start by placing a measuring tape around the largest part of her chest, the tape should be flat but not too snug.</p>
                        </div>
                    </div>
                    <div className="toggle-elem tops row">
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <p>Her before-and-after practice gear can be more relaxed but make sure the gear she's wearing for all of her athletic pursuits fits like a comfortable second skin.</p>
                            <h4>Ready to Wear</h4>
                            <p>Most ivivva gear is pre-shrunk to ensure a quality fit the first time and so there are no surprises in the wash. Don't buy a size that's too big assuming it will shrink to fit, because it likely won't.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bottoms row">
                        <div className="row">
                            <h2 className="section-heading">How to Measure</h2>
                        </div>
                        <div className="row how-to-measure inner-container">
                            <h4>Waist</h4>
                            <p>Her natural waist lies between her bottom ribs and hip bones. To measure, have her breathe deeply, relax her stomach and lie the tape measure flat around her waist, allowing for a &frac14; inch of slack.</p>
                            <h4>Hip</h4>
                            <p>To achieve the most accurate hip measurement, find the widest point of her hips and place the measuring tape around. Tip! The hip bone often isn't the widest point â€“ it's one to two inches lower, where her hip is at its fullest.</p>
                            <h4>Torso</h4>
                            <p>Start by placing the tape measure from a point on her right shoulder midway between her neck base and her shoulder joint, down her back through her crotch and up over her right chest apex, back to the starting point, avoiding
                                constriction at the crotch.</p>
                            <h4>Inseam</h4>
                            <p>The vertical distance from the midpoint of the crotch to the floor, taken while standing and without shoes.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bottoms row">
                        <div className="row">
                            <h2 className="section-heading">Fit Guidelines</h2>
                        </div>
                        <div className="fit-guidelines inner-container">
                            <p>Her before-and-after practice gear can be more relaxed but make sure the gear she's wearing for all of her athletic pursuits fits like a comfortable second skin.</p>
                            <h4>Ready to Wear</h4>
                            <p>Most ivivva gear is pre-shrunk to ensure a quality fit the first time and so there are no surprises in the wash. Don't buy a size that's too big assuming it will shrink to fit, because it likely won't.</p>
                            <h4>Free to Grow Hemming</h4>
                            <p>Depending on her height and favourite activity, pants may need to be hemmed. If there is not an ivivva store near you, find a lululemon store and ask for "child's hemming". All ivivva items are specially hemmed with a double
                                turn so when she grows, she can go back to the store and get her pants let down an inch.</p>
                        </div>
                    </div>
                    <div className="toggle-elem bras row">
                        <div className="row">
                            <h2 className="section-heading">How to Measure</h2>
                        </div>
                        <div className="row how-to-measure inner-container">
                            <h4>Chest</h4>
                            <p>Start by placing a measuring tape around the largest part of her chest, the tape should be flat but not too snug.</p>
                        </div>
                    </div>
                </div>
                <!--//girls-->
            </div>
            <!--//find-your-fit-->
        </div>
        <!--//size-chart-content-->
    </div>
    <!--// toggle-base section outer-container -->
</div>
<!--// #size-chart -->
</React.Fragment>
);
