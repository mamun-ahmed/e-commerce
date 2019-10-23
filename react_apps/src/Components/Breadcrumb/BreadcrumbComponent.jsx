import React from "react";
import {Link} from 'react-router-dom';
export default function BreadcrumbComponent() {
  return (
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/"> Home </Link>

            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
