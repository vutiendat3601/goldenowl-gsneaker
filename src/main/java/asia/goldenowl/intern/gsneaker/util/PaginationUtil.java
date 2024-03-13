package asia.goldenowl.intern.gsneaker.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import asia.goldenowl.intern.gsneaker.exception.PaginationException;

public class PaginationUtil {
    public static void checkPagination(int page, int size) {
        if ((long) page * size > Integer.MAX_VALUE) {
            throw new PaginationException(
                    "Invalid page offset, page offset (page * size) must be between 0 and " + Integer.MAX_VALUE);
        }
    }

    public static Pageable parsePagination(int page, int size) {
        checkPagination(page, size);
        return PageRequest.of(page, size);
    }
}
