import React from 'react';

const MensBottomsSizeGuide = () => (
  <div className="toggle-elem bottoms row">
    <h2 className="section-heading">How to Measure</h2>

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
  </div>
);

export default MensBottomsSizeGuide;
